from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
from PIL import Image
import numpy as np
import io
import base64

app = FastAPI()

# Allow CORS for local frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = YOLO('yolov8l.pt')

@app.post("/analyze-traffic")
async def analyze_traffic(image: UploadFile = File(...)):
    contents = await image.read()
    pil_image = Image.open(io.BytesIO(contents)).convert("RGB")
    img_array = np.array(pil_image)
    results = model(img_array)
    result = results[0]
    boxes = result.boxes
    names = result.names
    vehicle_types = ['car', 'bus', 'truck', 'motorcycle', 'bicycle']
    vehicle_counts = {vt: 0 for vt in vehicle_types}
    for box in boxes.data:
        x1, y1, x2, y2, conf, cls = box
        class_name = names[int(cls)]
        if class_name in vehicle_types:
            vehicle_counts[class_name] += 1
            color = (0, 255, 0)
            cv2 = __import__('cv2')
            cv2.rectangle(img_array, (int(x1), int(y1)), (int(x2), int(y2)), color, 2)
            label = f"{class_name} {conf:.2f}"
            cv2.putText(img_array, label, (int(x1), int(y1) - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.4, (255, 0, 0), 1)
    total_vehicles = sum(vehicle_counts.values())
    if total_vehicles <= 5:
        traffic_status = 'Low Traffic'
    elif total_vehicles <= 15:
        traffic_status = 'Moderate Traffic'
    else:
        traffic_status = 'High Traffic'
    suggestion = f"Detected: {vehicle_counts}. Status: {traffic_status}."

    # Encode annotated image to base64
    from PIL import Image as PILImage
    import base64
    annotated_pil = PILImage.fromarray(img_array)
    buffered = io.BytesIO()
    annotated_pil.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode()
    return {"suggestions": suggestion, "annotated_image": img_str}
