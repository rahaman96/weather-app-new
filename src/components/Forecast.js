import React from 'react'
// import sun from '../../public/assets/images/sun.png'
// import getWeatherData from '../services/WeatherService'
import getFormattedWeatherData from '../services/WeatherService';
const Forecast = ({ title, weather,items }) => {

  // const fetchWeather = async () => {
  //   const data = await getFormattedWeatherData({ q: "Kolkata" });
  //   console.log('data', data)
  // };
  // fetchWeather();

  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='text-white'>{title}</p>

      </div>
      <hr className='my-2' />
      <div className='flex flex-row items-center justify-between text-white'>
        {items?.map((item) => {
          <div className='flex flex-col items-center justify-center '>
            <p className='font-light text-sm'>
             {item?.title}
            </p>
            <img src='assets/images/sun.png' alt="sun1" className='w-5 my-2 ' />
            <p className='font-medium'>{`${item.temp.toFixed()}° `}</p>
          </div>
        })}


        {/* <div className='flex flex-col items-center justify-center '>
          <p className='font-light text-sm'>
            04:30 PM
          </p>
          <img src='assets/images/sun.png' alt="sun1" className='w-5 my-2 ' />
          <p className='font-medium'>34° </p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <p className='font-light text-sm'>
            04:30 PM
          </p>
          <img src='assets/images/sun.png' alt="sun1" className='w-5 my-2' />
          <p className='font-medium'>34° </p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <p className='font-light text-sm'>
            04:30 PM
          </p>
          <img src='assets/images/sun.png' alt="sun1" className='w-5 my-2' />
          <p className='font-medium'>34° </p>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <p className='font-light text-sm'>
            04:30 PM
          </p>
          <img src='assets/images/sun.png' alt="sun1" className='w-5 my-2' />
          <p className='font-medium'>34° </p>
        </div> */}
      </div>
    </div>
  )
}

export default Forecast 