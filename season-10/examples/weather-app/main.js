/**
 * MINIMAL WEATHER APP
 * 
 * Demonstrates:
 * - Fetching from a real API
 * - Error handling with try/catch
 * - Updating DOM with data
 * - Loading/error states
 */

// Get DOM elements
const form = document.getElementById('searchForm');
const input = document.getElementById('cityInput');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const weather = document.getElementById('weather');

// API configuration
// Sign up at https://openweathermap.org/api for free API key
// Replace with your own key
const API_KEY = 'demo'; //  get your own API
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Form submit handler
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = input.value.trim();
    
    if (!city) return;
    
    await fetchWeather(city);
    input.value = '';
});

// Main fetch function
async function fetchWeather(city) {
    // Show loading, hide others
    loading.classList.remove('hidden');
    error.classList.add('hidden');
    weather.classList.add('hidden');
    
    try {
        // Build URL with query parameters
        const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
        
        // Fetch from API
        const response = await fetch(url);
        
        // Check if request was successful
        if (!response.ok) {
            throw new Error(
                response.status === 404 
                    ? 'City not found' 
                    : `Error: ${response.status}`
            );
        }
        
        // Parse JSON response
        const data = await response.json();
        
        // Update DOM with data
        displayWeather(data);
        
    } catch (err) {
        // Show error message
        error.textContent = err.message;
        error.classList.remove('hidden');
        
    } finally {
        // Always hide loading
        loading.classList.add('hidden');
    }
}

// Display weather data in DOM
function displayWeather(data) {
    document.getElementById('cityName').textContent = 
        `${data.name}, ${data.sys.country}`;
    
    document.getElementById('temp').textContent = 
        `${Math.round(data.main.temp)}°C`;
    
    document.getElementById('description').textContent = 
        data.weather[0].description.charAt(0).toUpperCase() + 
        data.weather[0].description.slice(1);
    
    document.getElementById('details').textContent = 
        `Feels like ${Math.round(data.main.feels_like)}°C • ` +
        `Humidity ${data.main.humidity}% • ` +
        `Wind ${Math.round(data.wind.speed)} m/s`;
    
    weather.classList.remove('hidden');
}
