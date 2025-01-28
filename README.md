# Sustainify 🌱🍴🌍
The project aims to make an umbrella city planning model that will help the authorities, citizens to live and manage the situations in an optimal way. First we need to identify the problems that we face as a rewsident and as an authority who is supposed to manage the city.

** Problems:**

An umbrella initiative that ensures the following facilities:

-🍽️ **Food** :  **Gateway between restaurants and food donors** to manage surplus food and a model to predict the amount of surplus food left in resturant. So, that it can be distributed amog the foodless people by social activists at a low price. This will solve the problem of Food sortage.

### Transport Optimization with Graph Neural Networks    

**Overview**:  
The transport route optimization system leverages **Graph Neural Networks (GNNs)** to identify the most efficient and safe routes for transportation. The approach integrates diverse parameters such as **traffic congestion**, **road conditions**, **weather conditions (e.g., fog or haze)**, and extends to include **safety metrics**, making it suitable for applications like **women's safety**.  

**Key Features**:  
1. **Graph Representation**:  
   - The transport network is modeled as a **weighted graph**, where:
     - **Nodes** represent key locations or intersections.
     - **Edges** represent the roads connecting these locations, weighted by various factors like traffic, road quality, and weather conditions.

2. **Graph Neural Network (GNN) Framework**:  
   - A **Graph Convolutional Network (GCN)** is employed to process the graph data, learning the optimal path by aggregating information from neighboring nodes and edges.
   - **Edge weights** are dynamically adjusted based on real-time data from IoT sensors and traffic monitoring systems.

3. **Parameters for Optimization**:  
   - **Traffic Congestion**: Derived from real-time traffic data to prioritize less congested routes.
   - **Road Conditions**: Assessed using IoT sensors and road quality indices.
   - **Weather Conditions**: Integrated via APIs that provide real-time weather updates.
   - **Safety Metrics**: Includes data like accident history, presence of streetlights, and police station proximity. This makes the system particularly effective for **women's safety** and other vulnerable populations.

4. **Model Training**:  
   - The model is trained on historical data to predict optimal routes under various conditions.
   - Features include **road safety indices**, **average travel time**, and **historical traffic patterns**.

5. **Dynamic Path Updates**:  
   - Uses reinforcement learning (RL) alongside GNN to dynamically adjust the routes based on changing conditions, such as unexpected traffic jams or weather changes.

**Technical Workflow**:  
1. **Data Collection**:  
   - Real-time data from IoT devices, traffic cameras, and APIs for weather and safety.
2. **Graph Construction**:  
   - Generate a weighted graph from collected data.
3. **Model Development**:  
   - Use **PyTorch Geometric** or **DGL (Deep Graph Library)** to implement the GNN.
   - Incorporate a **reinforcement learning agent** to fine-tune edge weights based on reward functions like minimized travel time or maximized safety.
4. **Prediction and Routing**:  
   - Predict the optimal route using the trained GNN model.
   - Integrate results into a user-friendly application interface.

**Extending for Women's Safety**:  
- A **dedicated safety score** is calculated for each route using data like:
  - **Crime rate in the area**.
  - **Lighting conditions**.
  - **Public transport availability**.
  - **Proximity to emergency services**.  
- The system prioritizes routes with higher safety scores for female travelers, ensuring not just efficiency but also safety.

**Applications**:  
- Optimized transportation in urban areas.
- Emergency route planning during natural disasters.
- Dedicated safe routes for vulnerable populations.

**Visualization**:  
<img src="https://github.com/Lord3008/Sustainify/blob/main/Output_Images/Transport_traffic_Graph.png" alt="Weighted graph showing traffic" width="900" height="600">  
The graph visualization highlights traffic congestion levels, road conditions, and other factors, showcasing the real-time decision-making capabilities of the system.  

This approach not only optimizes transport but also sets a foundation for broader applications, including sustainability and safety, aligning with smart city initiatives.

-🌬️**Air**: **Model to help the city predict the AQI value and do trend analysis** and suggest necessary measures for improving air quality.

- ⚡**Energy** **Model to predict future energy usage of a country** and assist in the resource planning of the country. In Suatainability bites we call it smart energy management.

🏆 **Best MathWorks Award by MLH and MathWorks in HackNITR 5.0** for the project under the name **Sustainability Bites**.

# Impact 🌟

The project **Sustainify** aims to significantly reduce food waste, improve air quality, and enhance energy planning, contributing to a more sustainable and resilient future for communities worldwide. This if used properly can ensure a great management of country as a whole.
