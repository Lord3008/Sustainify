# Sustainify: Krushi & City 🌱🍴🌍

Sustainify is an integrated city planning model designed to empower authorities and citizens to manage urban and rural challenges optimally. The project identifies key issues faced by residents, authorities, and business owners, and proposes innovative, data-driven solutions for a sustainable future.

---

## Identified Problems

### Krushi (Rural)

- Lack of proper information
- Miscommunication between authorities and villagers

### City

#### A. Resident's Perspective

- Severe road traffic congestion
- Safety concerns for women on roads
- Food deficiency among the underprivileged

#### B. Authority's Perspective

- Rising air pollution
- Resource management challenges
- Ensuring trust and safety in road systems

#### C. Business Owner's Perspective

- Managing surplus food in restaurants to reduce waste and increase profit

---

## Solutions

### A. For Residents

#### 1. Traffic Congestion

- **Traffic Congestion Detection**
- **Optimized Route Prediction**

#### 2. Food Security

- **Food Gateway:**  
  A platform connecting restaurants and food donors to manage surplus food. Predictive models estimate surplus food, enabling distribution to the needy via social activists at affordable prices, addressing food shortages.

---

### Transport Optimization with Graph Neural Networks

**Overview:**  
A transport route optimization system leveraging **Graph Neural Networks (GNNs)** to identify efficient and safe routes. The system integrates parameters such as traffic congestion, road conditions, weather, and safety metrics, with a special focus on women's safety.

#### Key Features

- **Graph Representation:**  
  - Nodes: Key locations/intersections  
  - Edges: Roads, weighted by traffic, road quality, weather, and safety

- **GNN Framework:**  
  - Utilizes Graph Convolutional Networks (GCN) to process graph data  
  - Edge weights dynamically updated with real-time IoT and traffic data

- **Optimization Parameters:**  
  - Traffic congestion (real-time data)
  - Road conditions (IoT sensors)
  - Weather (API integration)
  - Safety metrics (accident history, lighting, police proximity)

- **Model Training:**  
  - Trained on historical data for optimal route prediction  
  - Features: road safety indices, average travel time, historical traffic patterns

- **Dynamic Path Updates:**  
  - Reinforcement learning (RL) adjusts routes in real time based on changing conditions

#### Technical Workflow

1. **Data Collection:**  
   Real-time data from IoT devices, cameras, and APIs
2. **Graph Construction:**  
   Weighted graph generation from collected data
3. **Model Development:**  
   Implementation using PyTorch Geometric or DGL, with RL agent for edge weight tuning
4. **Prediction & Routing:**  
   GNN model predicts optimal routes, integrated into a user-friendly interface

#### Women's Safety Extension

- **Dedicated Safety Score:**  
  - Crime rate
  - Lighting conditions
  - Public transport availability
  - Proximity to emergency services

Routes with higher safety scores are prioritized for female travelers, ensuring both efficiency and safety.

#### Applications

- Urban transport optimization
- Emergency route planning
- Safe routes for vulnerable populations

#### Visualization

<img src="https://github.com/Lord3008/Sustainify/blob/main/Output_Images/Transport_traffic_Graph.png" alt="Weighted graph showing traffic" width="900" height="600">

*The visualization highlights traffic congestion, road conditions, and other factors, demonstrating the system's real-time decision-making capabilities.*

---

### B. For Authorities

- 🌬️ **Air:**  
  Predictive models for AQI (Air Quality Index) and trend analysis, with actionable recommendations for air quality improvement.

- ⚡ **Energy:**  
  Models to forecast national energy usage, supporting smart energy management and resource planning.

---

## Achievements

🏆 **Best MathWorks Award** by MLH and MathWorks at HackNITR 5.0 for the project "Sustainability Bites".

---

## Impact 🌟

Sustainify aims to:

- Reduce food waste
- Improve air quality
- Enhance energy planning

By leveraging data and AI, Sustainify contributes to a more sustainable and resilient future for communities worldwide.

---
