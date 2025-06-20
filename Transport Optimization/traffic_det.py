import streamlit as st
import cv2
import numpy as np
from PIL import Image
from ultralytics import YOLO

# Load YOLOv8 model (make sure you have yolov8l.pt or change to your preferred model)
@st.cache_resource
def load_model():
    return YOLO('yolov8l.pt')

model = load_model()

st.title('Traffic Object Detection with YOLOv8')
st.write('Upload an image to detect vehicles (car, bus, truck, motorcycle, bicycle) using YOLOv8.')

uploaded_file = st.file_uploader('Choose an image...', type=['jpg', 'jpeg', 'png'])

if uploaded_file is not None:
    image = Image.open(uploaded_file).convert('RGB')
    img_array = np.array(image)
    results = model(img_array)
    result = results[0]
    boxes = result.boxes
    names = result.names
    annotated_img = img_array.copy()
    vehicle_types = ['car', 'bus', 'truck', 'motorcycle', 'bicycle']
    vehicle_counts = {vt: 0 for vt in vehicle_types}
    for box in boxes.data:
        x1, y1, x2, y2, conf, cls = box
        class_name = names[int(cls)]
        if class_name in vehicle_types:
            vehicle_counts[class_name] += 1
            color = (0, 255, 0)
            cv2.rectangle(annotated_img, (int(x1), int(y1)), (int(x2), int(y2)), color, 2)
            label = f"{class_name} {conf:.2f}"
            cv2.putText(annotated_img, label, (int(x1), int(y1) - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.4, (255, 0, 0), 1)
    st.image(annotated_img, caption='Annotated Image', use_container_width=True)
    st.subheader('Vehicle Counts')
    for vt in vehicle_types:
        st.write(f"{vt.capitalize()}: {vehicle_counts[vt]}")
    
    # Traffic level assessment
    total_vehicles = sum(vehicle_counts.values())
    if total_vehicles <= 5:
        traffic_status = 'Low Traffic'
    elif total_vehicles <= 15:
        traffic_status = 'Moderate Traffic'
    else:
        traffic_status = 'High Traffic'
    st.markdown(f"**Traffic Status:** {traffic_status}")

    # Traffic Flow and Intensity Over Time
    st.subheader('Traffic Flow and Intensity Over Time')
    for plot_file in ['newplot.png', 'newplot2.png']:
        try:
            st.image(plot_file, use_container_width=True)
        except Exception:
            st.warning(f"Could not display {plot_file}.")
else:
    st.info('Please upload an image to get started.')
