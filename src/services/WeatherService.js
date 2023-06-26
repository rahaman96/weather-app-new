import { DateTime } from 'luxon'

const API_KEY = "be8d1f7f92f60a8e5a9d9e7bc20fa7f6";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
    return fetch(url)
        .then((res) => res.json())
        .then((data) => data)
};

// export default getWeatherData;
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=be8d1f7f92f60a8e5a9d9e7bc20fa7f6

const formatCurrentWeather = (data) => {
   
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data
    const { main: details, icon } = weather[0]
    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed
    };
};



const fomatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    console.log('daily', data)
    daily = daily?.slice(1, 6).map(d => {
        console.log('daily', d)

        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });
    hourly = hourly?.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    });
    return { timezone, daily, hourly }
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        'weather',
        searchParams
    ).then(formatCurrentWeather);

    const { lat, lon } = formatCurrentWeather
    const fomattedForecastWeather = await getWeatherData('onecall', {
        lat, lon, exclude: "current,minutely,alerts",
        units: searchParams.units,
    }).then(fomatForecastWeather)
    return { ...formattedCurrentWeather, ...fomattedForecastWeather }
}
// const fomatToLocalTime = (secs, zone, fomat = "ccc,dd LLL yyyy' | Local time:'hh:mm a "
// ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(fomat);

const formatToLocalTime = (secs, zone, format = "ccc, dd LLL yyyy | Local time: hh:mm a") => {
    const dateTime = DateTime.fromSeconds(secs).setZone(zone);
    const localTime = dateTime.toFormat(format);
    return localTime;
  };

const iconUrlFromCode=(code)=>`img/${code}`

export default getFormattedWeatherData;
export {formatToLocalTime,iconUrlFromCode};