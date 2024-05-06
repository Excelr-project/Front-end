import React, { useEffect, useState } from 'react';

const UserCarPage = () => {

    const [cityName, setCityName] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.href = '/search');
        const cityname = searchParams.get('cityName');
        if (cityName) {
            setCityName(cityname);
        }
    }, [cityName]);



    return (
        <div>

            <h1>Car usage details</h1>
            {/* <div>Selected City : {cityName}</div> */}
        </div>
    )
}

export default UserCarPage