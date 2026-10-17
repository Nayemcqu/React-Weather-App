# 🌦️ React Weather App

A responsive weather application built with React that displays current weather conditions and upcoming forecasts. Search for a city to explore its weather, or allow location access to retrieve weather information for your current position.

**Live Demo:** https://react-weather-app-sigma-umber.vercel.app/

**Repository:** https://github.com/Nayemcqu/React-Weather-App

## ✨ Features

- **Current Weather:** View temperature, feels-like temperature, humidity, atmospheric pressure, wind speed, and weather conditions.
- **City Search:** Search for weather information by entering a city name.
- **Location-Based Weather:** Use the browser's Geolocation API to retrieve weather for your current coordinates.
- **Weather Forecast:** Browse upcoming forecast entries in a horizontally scrolling interface.
- **Responsive Interface:** Adapt the layout for different screen sizes using Tailwind CSS.
- **API Integration:** Fetch weather data asynchronously using Axios and OpenWeatherMap.
- **Data Fetching and Caching:** Use TanStack Query to manage API requests, loading states, errors, and cached responses.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based user interface |
| Vite | Development server and production builds |
| Tailwind CSS 4 | Responsive styling and layout |
| Axios | HTTP requests to the weather API |
| TanStack Query | Asynchronous data fetching and caching |
| OpenWeatherMap API | Current weather and forecast data |
| Browser Geolocation API | Retrieve the user's geographic coordinates |

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm, which comes with Node.js
- An [OpenWeatherMap API key](https://openweathermap.org/api)

### 1. Clone the repository

```bash
git clone https://github.com/Nayemcqu/React-Weather-App.git
```

### 2. Navigate to the project directory

```bash
cd React-Weather-App
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the API key

Create a `.env` file in the root directory of the project, alongside `package.json`.

Add your OpenWeatherMap API key:

```env
VITE_API_KEY=your_openweathermap_api_key
```

Replace `your_openweathermap_api_key` with your actual API key.

**Important:** Never commit your real API key to GitHub. Keep `.env` out of version control and configure the same environment variable in your deployment platform.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🌐 How It Works

### Current Weather

The application requests current weather data from OpenWeatherMap and displays the selected location's weather conditions and measurements.

### City Search

Enter a city name in the search field to retrieve current weather and forecast information for that location.

### Geolocation

When the application loads, it requests the browser's current position. If location access is granted, the coordinates are used to fetch local weather information.

Location access depends on browser permission and is generally available on HTTPS websites or localhost during development.

### Forecast Data

The application retrieves forecast data from OpenWeatherMap and presents upcoming forecast entries in a horizontally scrolling layout on wider screens.

### Data Fetching and Caching

Axios handles HTTP requests, while TanStack Query manages asynchronous queries, loading and error states, and cached results to help avoid unnecessary repeated requests.

## 📁 Project Structure

```text
React-Weather-App/
├── public/
├── src/
│   ├── components/
│   │   ├── weather.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── Forecast.jsx
│   │   └── ...
│   ├── hooks/
│   │   ├── useFetchWeather.js
│   │   └── useGeoLocation.js
│   ├── services/
│   │   └── api.js
│   ├── ui/
│   │   └── Button.jsx
│   ├── utils/
│   │   └── dataFormatter.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
└── README.md
```

*Note: This structure illustrates the main application modules. Your repository may contain additional files.*

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check the code |

## 🔑 API Configuration

This project uses the OpenWeatherMap API to retrieve:

- Current weather conditions
- Forecast data

You must provide a valid API key through the `VITE_API_KEY` environment variable.

Weather requests use metric units, so temperatures are displayed in Celsius.

API access and available forecast data depend on your OpenWeatherMap account and API plan.

## 🎯 What I Learned

- Integrating third-party REST APIs into a React application.
- Managing asynchronous requests and cached data with TanStack Query.
- Creating reusable React components and custom hooks.
- Working with browser geolocation and user permissions.
- Building responsive interfaces with Tailwind CSS.
- Handling loading states and API errors.
- Configuring environment variables and deploying a Vite application.

## 🔮 Potential Improvements

- Add a more detailed forecast view with hourly and daily summaries.
- Allow users to switch between Celsius and Fahrenheit.
- Improve the weather icons so they reflect the actual conditions returned by the API.
- Add a dedicated location-permission fallback so users can search without granting geolocation access.
- Improve API error handling and add automated tests.
- Add saved cities and weather alerts.

## 👨‍💻 Author

**Nayem Khan**

Full-Stack Developer | React · Next.js · Node.js · JavaScript

- GitHub: [@Nayemcqu](https://github.com/Nayemcqu)
- Project: [React Weather App](https://github.com/Nayemcqu/React-Weather-App)

---

Built as a hands-on project to practise React development, API integration, asynchronous data management, and responsive UI design.
