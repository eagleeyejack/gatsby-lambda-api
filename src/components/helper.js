export function getWeather(weather) {
  if (weather === "Clouds") {
    return "☁️"
  } else if (weather === "Clear") {
    return "☀️"
  } else if (weather === "Atomsphere") {
    return "🌫"
  } else if (weather === "Snow") {
    return "❄️"
  } else if (weather === "Rain") {
    return "☔️"
  } else if (weather === "Drizzle") {
    return "🌧"
  } else if (weather === "Thunderstorm") {
    return "⚡️"
  } else {
    return "🌡"
  }
}
