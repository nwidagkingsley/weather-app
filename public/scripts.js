// public/scripts.js

document.getElementById('weatherForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const city = document.getElementById('cityInput').value;
    const response = await fetch('/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ city }),
    });
  
    const data = await response.json();
  
    // Update the HTML elements with the new data
    document.getElementById('city').textContent = `City: ${data.city}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.temperature} K`;
    document.getElementById('description').textContent = `Description: ${data.description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${data.windSpeed} m/s`;
  
    // Display the weather icon
    const iconUrl = `https://openweathermap.org/img/w/${data.weatherIcon}.png`;
    document.getElementById('weatherIcon').src = iconUrl;
  });
  