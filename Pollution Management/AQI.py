import numpy as np
import pickle
import streamlit as st
import pandas as pd

pickle_in=open("regr.pkl","rb")
predictor=pickle.load(pickle_in)

def welcome():
    return "Welcome All"

def aqi_predictor(Country, City, CO, Ozone, NO2, PM2):
   
    prediction=predictor.predict([[Country, City, CO, Ozone, NO2, PM2]])
    print(prediction)
    return prediction

def main():
    st.title("AQI value predictor")
    html_temp = """
    <div style="background-color:tomato;padding:10px">
    <h2 style="color:white;text-align:center;">Streamlit AQI Predictor ML App </h2>
    </div>
    """
    st.markdown(html_temp,unsafe_allow_html=True)
    Country = st.text_input("Country","Enter country number")
    City = st.text_input("City","Enter city number")
    CO = st.text_input("CO","Enter CO AQI value")
    Ozone = st.text_input("Ozone","TEnter Ozone AQI value")
    NO2 = st.text_input("NO2","Enter NO2 AQI value")
    PM2 = st.text_input("PM2","Enter PM2 AQI value")

    result=""
    if st.button("Predict"):
        result=aqi_predictor(Country, City, CO, Ozone, NO2, PM2)
    st.success('The Predicted AQI Value is {}'.format(result))
    if st.button("About"):
        st.text("Lets LEarn")
        st.text("Built with Streamlit")

if __name__=='__main__':
    main()