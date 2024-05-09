import React from 'react';
import FordEdge from "../assets/all-images/cars/FordEdge.webp";
import HondaAccord from "../assets/all-images/cars/Honda-accord.jpg";
import HondaCity from "../assets/all-images/cars/Honda-city.jpg";
import HondaPassport from "../assets/all-images/cars/Honda-passport.jpg";
import Marutibaleno from "../assets/all-images/cars/Maruti-baleno.jpg";
import MarutiSwift from "../assets/all-images/cars/Maruti-swift.jpg";
import MarutiWagon from "../assets/all-images/cars/Maruti-wagon-R.webp";
import NissonCentra from "../assets/all-images/cars/NissanCentra.jpg";
import TataIndigo from "../assets/all-images/cars/Tata-indigo.webp";
import TataSafari from "../assets/all-images/cars/Tata-safari.webp";
import TataNexon from "../assets/all-images/cars/tata-Nexon.jpg";
import volksWagenVento from "../assets/all-images/cars/volkswagen-vento.webp";
import volksWagenPolo from "../assets/all-images/cars/volswagen-polo.webp";
import "../styles/Cars.css";

const Cars = () => {
    return (
        <div className='ourcars'>
            <h1 id='heading'>Our Cars</h1>
            <div className='contain'>



                <div className="car-container">
                    <div className='car-image'>
                        <img src={HondaAccord} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <p>Company: Honda </p>
                        <p>Model : Accord</p>
                        <p>Fuel : petrol</p>
                        <p>Mileage : 23 km/l</p>
                    </div>
                </div>

                <div className="car-container">
                    <div className='car-image'>
                        <img src={HondaCity} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <div className="car-details">
                            <p>Company: Honda </p>
                            <p>Model : City</p>
                            <p>Fuel : Diesel</p>
                            <p>Mileage : 20.5 km/l</p>
                        </div>
                    </div>
                </div>

                <div className="car-container">
                    <div className='car-image'>
                        <img src={FordEdge} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <div className="car-details">
                            <p>Company: Ford </p>
                            <p>Model : Edge</p>
                            <p>Fuel : Gas</p>
                            <p>Mileage : 21 MPG</p>
                        </div>
                    </div>
                </div>

                <div className="car-container">
                    <div className='car-image'>
                        <img src={NissonCentra} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <div className="car-details">
                            <p>Company : Nisson </p>
                            <p>Model : Centra</p>
                            <p>Fuel : Gas</p>
                            <p>Mileage : 30 - 32 MPG</p>
                        </div>
                    </div>
                </div>

                <div className="car-container">
                    <div className='car-image'>
                        <img src={HondaPassport} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <div className="car-details">
                            <p>Company: Honda </p>
                            <p>Model : Passport</p>
                            <p>Fuel : Gas</p>
                            <p>Mileage : 27 km/l</p>
                        </div>
                    </div>
                </div>

                <div className="car-container">
                    <div className='car-image'>
                        <img src={Marutibaleno} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <div className="car-details">
                            <p>Company: Maruti </p>
                            <p>Model : Baleno</p>
                            <p>Fuel : petrol</p>
                            <p>Mileage : 23 km/l</p>
                        </div>
                    </div>
                </div>

                <div className="car-container">
                    <div className='car-image'>
                        <img src={MarutiSwift} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <div className="car-details">
                            <p>Company: Maruti </p>
                            <p>Model : Swift</p>
                            <p>Fuel : petrol</p>
                            <p>Mileage : 25 - 28 km/l</p>
                        </div>
                    </div>
                </div>

                <div className="car-container">
                    <div className='car-image'>
                        <img src={MarutiWagon} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <div className="car-details">
                            <p>Company:Maruti</p>
                            <p>Model : Wagon</p>
                            <p>Fuel : petrol</p>
                            <p>Mileage : 22 - 30 km/l</p>
                        </div>
                    </div>
                </div>

                <div className="car-container">
                    <div className='car-image'>
                        <img src={TataIndigo} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <div className="car-details">
                            <p>Company: Tata </p>
                            <p>Model : Indigo</p>
                            <p>Fuel : Diesel</p>
                            <p>Mileage : 15 - 20 km/l</p>
                        </div>
                    </div>
                </div>

                <div className="car-container">
                    <div className='car-image'>
                        <img src={TataNexon} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <div className="car-details">
                            <p>Company: Tata </p>
                            <p>Model : Nexon</p>
                            <p>Fuel : petrol</p>
                            <p>Mileage : 17 19 km/l</p>
                        </div>
                    </div>
                </div>

                <div className="car-container">
                    <div className='car-image'>
                        <img src={TataSafari} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <div className="car-details">
                            <p>Company: Tata</p>
                            <p>Model : Safari</p>
                            <p>Fuel : Diesel</p>
                            <p>Mileage : 14 - 15 km/l</p>
                        </div>
                    </div>
                </div>

                <div className="car-container">
                    <div className='car-image'>
                        <img src={volksWagenVento} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <div className="car-details">
                            <p>Company: volkswagen </p>
                            <p>Model : Vento</p>
                            <p>Fuel :Diesel</p>
                            <p>Mileage : 20 - 23 km/l</p>
                        </div>
                    </div>
                </div>

                <div className="car-container">
                    <div className='car-image'>
                        <img src={volksWagenPolo} alt="" srcset="" />
                    </div>
                    <div className="car-details">
                        <p>Company: volkswagen </p>
                        <p>Model : Polo</p>
                        <p>Fuel :Diesel</p>
                        <p>Mileage : 17 - 19 km/l</p>
                    </div>
                </div>
            </div></div>
    )
}

export default Cars