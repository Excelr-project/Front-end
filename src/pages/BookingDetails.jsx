import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/BookingDetails.css";

const BookingDetails = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');
    const carId = searchParams.get('carId');
    const cityName = searchParams.get('cityName');
    const fromDate = searchParams.get('fromDate');
    const toDate = searchParams.get('toDate');

    const [bookingMessage, setBookingMessage] = useState('');


    const handleBookCar = async () => {
        try {
            // Send booking request to backend
            await axios.post('http://localhost:8080/bookcar', {
                userId: userId,
                from_Place: cityName,
                fromDate: fromDate,
                toDate: toDate,
                car_id: carId
            });
            alert("Booked Succesfully! Please check you email for details.")

            setBookingMessage('Booking successful');
            window.location.href = `/search`;
        } catch (error) {
            setBookingMessage('Booking failed. Please try again.');
        }
    };



    return (
        <div className='bookedDetails'>
            <h1>Confirm your Booking Details :</h1> <br />

            <p>User Id : {userId}</p>
            <p>Car Id : {carId}</p>
            <p>City Name : {cityName}</p>
            <p>From Date : {fromDate}</p>
            <p>To Date : {toDate}</p>
            {bookingMessage && <p>{bookingMessage}</p>}
            <button onClick={handleBookCar}>Book Car</button>
        </div>
    )
}

export default BookingDetails;