/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import "../styles/Landingpage.css";

const Landingpage = () => {

    const [cities, setCities] = useState([]);
    const [showCities, setShowCities] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, settoDate] = useState('');
    const [cars, setCars] = useState([]);
    const [userId, setUserId] = useState('');
    const [bookingMessage, setBookingMessage] = useState('');
    const [Booking, setBooking] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCities();
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);

    const fetchCities = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/cities");
            setCities(res.data);
        } catch (error) {
            alert("Unable to fetch cities");
            window.location.href = '/search';
        }
    }

    const handleSearch = async () => {
        setShowCities(true);
    };

    const handleCityClick = (cityName) => {
        // handle here, example, redirect to a city page
        setSearchValue(cityName);
        setShowCities(false);
    }

    const searchCars = async () => {
        try {

            window.location.href = `/usercarpage?cityName=${searchValue}&fromDate=${fromDate}&toDate=${toDate}`;
        } catch (error) {
            alert("Unable to search");
            window.location.href = '/search';
        }
    }

    const handleBookings = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/bookings/${userId}`);
            setBooking(res.data);
        } catch (error) {
            setError('No Bookings !');
        }
    }

    const handleCancelBooking = async (bookingid) => {
        try {
            const res = await axios.delete(`http://localhost:8080/cancel/${bookingid}`);
            alert("Booking with id " + bookingid + "cancelled");
            setBookingMessage("Booking Cancelled");
            handleBookings();
        } catch (error) {
            setBookingMessage("Unable to Cancel");
        }
    }

    return (

        <div className='Container'>

            <div className='top'>
                <h1 id='h1'>Welcome </h1>

                <div className='greet'>

                    {/* {userId && <h5 id='userid'>Your Id : {userId}</h5>} */}
                    <h2>You Need a Car ?</h2>

                    <p id='p'>Book Ride...Drive Ride....Enjoy Ride</p>
                </div>

            </div>





            <div className="mid">

                <div className="content">
                    <h5 id='h5'>Select Your City</h5>

                    <div className='city'>

                        <input type='text' className='searchbar' onClick={handleSearch} placeholder='Search your city' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

                        {showCities && (
                            <div className="city-list">
                                <ul>
                                    {cities.map(city => (
                                        <li key={city.id}>
                                            <a className='city' onClick={() => handleCityClick(city.name)}>{city.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>


                    <div className="bar">

                        <input type="date" name="fromDate" id="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />

                        <input type="date" name="toDate" id="toDate" value={toDate} onChange={(e) => settoDate(e.target.value)} />


                    </div>

                    <div className='search'>
                        {/* <button onClick={searchCars}>Search</button> */}
                        <Button variant="contained" color='success' onClick={searchCars}>Search</Button>
                    </div>

                    <div className='bookings'>
                        {/* <button id='bookingbtn' onClick={handleBookings}>My Bookings</button> */}

                        <Button variant='outlined' color='dark' id='bookingbtn' onClick={handleBookings}>My Bookings</Button>
                        {error && <p>{error}</p>}
                        <ul>
                            {Booking.map((booking, index) => (
                                <li key={index}>
                                    {/* <p>User Id: {Booking.userId}</p> */}
                                    <p>Booking Id : {booking.id}</p>
                                    <p>Place: {booking.place}</p>
                                    <p>From Date: {booking.fromDate}</p>
                                    <p>To Date: {booking.toDate}</p>
                                    <p>Total Rent: {booking.totalRent}</p>

                                    <button onClick={() => handleCancelBooking(booking.id)}>Cancel Booking</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Landingpage