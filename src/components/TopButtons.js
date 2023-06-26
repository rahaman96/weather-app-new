import React from 'react'

const TopButtons = ({setQuery}) => {
    const cities = [
        {
            id: 1,
            title: 'Delhi'
        },
        {
            id: 2,
            title: 'Mumbai'
        },
        {
            id: 3,
            title: 'Kolkata'
        },
        {
            id: 4,
            title: 'Bangalore'
        },
        {
            id: 5,
            title: 'Darjeeling'
        },
        {
            id: 6,
            title: 'Sikkim'
        },
    ];

    console.log('cities', cities)
    return (
        <div className='flex items-center justify-around my-6'>
            {cities.map((city) => (
                <button key={city.id} className='text-[#FFFFFF] text-lg font-medium' onClick={()=>setQuery({q:city.title})} >{city.title}</button>
            ))}
        </div>
    )
}

export default TopButtons