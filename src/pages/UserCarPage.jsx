import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/UserCarPage.css";

const UserCarPage = () => {

    const [cityName, setCityName] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [cars, setCars] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const cityName = searchParams.get('cityName');
        const fromDate = searchParams.get('fromDate');
        const toDate = searchParams.get('toDate');
        const userId = localStorage.getItem('userId');


        if (cityName && fromDate && toDate && userId) {
            setCityName(cityName);
            setFromDate(fromDate);
            setToDate(toDate);
            setUserId(userId);
            fetchCars(cityName);
        }
    }, []);

    const fetchCars = async (cityName) => {
        try {
            const res = await axios.get(`http://localhost:8080/car/getByCity?cityName=${cityName}`);
            setCars(res.data);
        } catch (error) {
            alert(error)
        }
    }


    return (
        <div>

            <div className='details'>
                <h1>Selected details :</h1>
                <p><span id='key'>Selected City : </span><span>{cityName}</span></p>
                <p><span id='key'>Selected From Date :</span> <span>{fromDate}</span></p>
                <p><span id='key'>Selected To Date :</span> <span>{toDate}</span></p>
            </div>


            <div className="middle">
                <h2><span>Visit </span><span id='link'> Cars</span><span> link above for Images</span></h2>

            </div>

            <div className='cars'>


                <div>
                    <h2 id='headingg'>Available cars in {cityName}:</h2>

                    <div className='car-list'>
                        {cars.map(car => (
                            <div className='car-item' key={car.id}>
                                <p><span className="key">Car Id : </span> <span className="value"> {car.id}</span></p>
                                <p><span className="key">Company:</span> <span className="value">{car.company}</span></p>
                                <p><span className="key">Model:</span> <span className="value">{car.model}</span></p>
                                <p><span className="key">Year:</span> <span className="value">{car.year}</span></p>
                                <p><span className="key">Rent Per Day:</span> <span className="value">Rs.{car.rentPerDay}</span></p>
                                <p><span className="key">Color:</span> <span className="value">{car.color}</span></p>

                                <Link to={`/BookingDetails?userId=${userId}&carId=${car.id}&cityName=${cityName}&fromDate=${fromDate}&toDate=${toDate}`}>
                                    <button>Book</button>
                                </Link>
                                <br /><br /><br />
                            </div>
                        ))}


                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserCarPage;