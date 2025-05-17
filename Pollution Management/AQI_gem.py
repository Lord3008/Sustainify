import streamlit as st
import numpy as np
from google import genai

client = genai.Client(api_key="AIzaSyBfpSy8Z58lhAN2nZI8aV8fwS01RRb_N78")

class AQIAgent:
    def __init__(self):
        self.client = client
    
    def predict_aqi(self, country, state, district, city, co2, no2, ozone, so2, pm25, pm10):
        prompt = (
            f"Predict the AQI for the following location and pollutants:\n"
            f"Country: {country}\nState: {state}\nDistrict: {district}\nCity: {city}\n"
            f"CO₂: {co2} µg/m³\nNO₂: {no2} µg/m³\nOzone: {ozone} µg/m³\n"
            f"SO₂: {so2} µg/m³\nPM2.5: {pm25} µg/m³\nPM10: {pm10} µg/m³\n"
            "Provide the AQI value along with actionable suggestions for improvement in a structured format."
        )
        
        response = self.client.models.generate_content(model="gemini-2.0-flash", contents=prompt)
        response_text = response.text.strip()
        return response_text

# Instantiate AQI Agent
aqi_agent = AQIAgent()

# Streamlit UI
st.set_page_config(page_title="🌍 AI-Powered AQI Prediction", layout="wide")
st.title("🌍 AI-Powered AQI Prediction & Recommendations")

st.sidebar.header("Enter Location Details")
country = st.sidebar.text_input("Country", "India")
state = st.sidebar.text_input("State", "")
district = st.sidebar.text_input("District", "")
city = st.sidebar.text_input("City", "")

st.sidebar.header("Enter AQI Parameters (µg/m³)")
co2 = st.sidebar.number_input("CO₂", min_value=0, value=400)
no2 = st.sidebar.number_input("NO₂", min_value=0, value=20)
ozone = st.sidebar.number_input("Ozone", min_value=0, value=30)
so2 = st.sidebar.number_input("SO₂", min_value=0, value=10)
pm25 = st.sidebar.number_input("PM2.5", min_value=0, value=25)
pm10 = st.sidebar.number_input("PM10", min_value=0, value=40)

if st.sidebar.button("Predict AQI"):
    response = aqi_agent.predict_aqi(country, state, district, city, co2, no2, ozone, so2, pm25, pm10)
    st.subheader("📊 AQI Prediction & Recommendations")
    st.markdown(response)
