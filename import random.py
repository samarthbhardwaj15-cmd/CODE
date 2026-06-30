import requests

API_KEY = "YOUR_API_KEY"

city = input("Enter City Name: ")

url =  f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"

response = requests.get(url)
data = response.json()

if response.status_code == 200:
    print("\nWeather Information")
    print("---------------------")
    print("City:", data["name"])
    print("Temp:", data["main"]["temp"], "c")
    print("Humadity:", data["main"]["humadity"], "%")
    print("Wind Speed:", data["wind"]["speed"], "m/s")
    print("condition:", data["weather"][0]["description"])
else:
    print("City Not Found!")    