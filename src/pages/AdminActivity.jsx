import axios from 'axios';
import React, { useState } from 'react';
import "../styles/AdminActivity.css";

const AdminActivity = () => {

    const [showForm, setShowForm] = useState(false);
    const [showFormm, setShowFormm] = useState(false);
    const [showForms, setShowForms] = useState(false);
    const [cars, setCars] = useState([]);

    const [carDetails, setCarDetails] = useState({
        company: '',
        model: '',
        color: '',
        year: 0,
        rentPerDay: 0,
        available: true,
        city: {
            id: 0
        },
        image: null

    });

    const [carDetailss, setCarDetailss] = useState({
        carId: 0,
        company: '',
        model: '',
        color: '',
        year: 0,
        rentPerDay: 0,
        available: true,
        city: {
            id: 0
        }
    });

    const [carDetailes, setCarDetailes] = useState({
        carid: 0,
    })




    const handleChange = (e) => {
        const { name, value } = e.target;
        const [parentKey, childKey] = name.split('.');

        if (childKey) {
            setCarDetails(prevState => ({
                ...prevState,
                [parentKey]: {
                    ...prevState[parentKey],
                    [childKey]: value
                }
            }));
        } else {
            setCarDetails(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };


    const handleChangee = (e) => {
        const { name, value } = e.target;
        const [parentKey, childKey] = name.split('.');

        if (childKey) {
            setCarDetailss(prevState => ({
                ...prevState,
                [parentKey]: {
                    ...prevState[parentKey],
                    [childKey]: value
                }
            }));
        } else {
            setCarDetailss(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleChanges = (e) => {
        const { name, value } = e.target;
        const [parentKey, childKey] = name.split('.');

        if (childKey) {
            setCarDetailes(prevState => ({
                ...prevState,
                [parentKey]: {
                    ...prevState[parentKey],
                    [childKey]: value
                }
            }));
        } else {
            setCarDetailes(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setCarDetails(prevState => ({
            ...prevState,
            image: file
        }));
    };


    const handleSubmitAdd = async () => {
        try {
            await axios.post('http://localhost:8080/car/addCar', {
                company: carDetails.company,
                model: carDetails.model,
                color: carDetails.color,
                year: carDetails.year,
                rentPerDay: carDetails.rentPerDay,
                available: carDetails.available,
                city: {
                    id: carDetails.city.id
                }
            }
            );


            alert("Added succesfully");
            setShowForm(false);
        } catch (error) {
            alert("Failed to add car");
        }
    }


    const handleSubmitUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/car/updateCar/${carDetailss.carId}`, {
                company: carDetailss.company,
                model: carDetailss.model,
                color: carDetailss.color,
                year: carDetailss.year,
                rentPerDay: carDetailss.rentPerDay,
                available: carDetailss.available,
                city: {
                    id: carDetailss.city.id
                }
            });
            alert("Updated succesfully");
            setShowFormm(false);
        } catch (error) {
            alert("Failed to Update car");
        }
    }

    const handleSubmitDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/car/deleteCar/${carDetailes.carid}`, {
                carid: carDetailes.carid
            });
            alert("Deleted Succesfully");
            setShowForms(false);
        } catch (error) {
            alert("Unable to delete the car");
        }
    }

    const handleSubmitGet = async () => {
        try {
            const res = await axios.get('http://localhost:8080/car/getallCars');
            setCars(res.data);
            alert("Fetched cars Succesfully");

        } catch (error) {
            alert("Could not get the cars");
        }
    }






    return (
        <div>

            <h2>Perform Admin activity</h2>

            <div className='addCar'>

                <button onClick={() => setShowForm(true)}>Add Car</button> <br /><br />

                {showForm && (
                    <div>
                        Company :<input type="text" name='company' value={carDetails.company} onChange={handleChange} placeholder='Company' /> <br />

                        Model :<input type="text" name='model' value={carDetails.model} onChange={handleChange} placeholder='model' /><br />

                        Color:<input type="text" name='color' value={carDetails.color} onChange={handleChange} placeholder='Color' /><br />

                        Year :<input type="number" name='year' value={carDetails.year} onChange={handleChange} placeholder='year' /><br />

                        Rent_per_day :<input type="number" name='rentPerDay' value={carDetails.rentPerDay} onChange={handleChange} placeholder='rentPerDay' /><br />

                        City Id :<input type="number" name='city.id' value={carDetails.city.id} onChange={handleChange} placeholder='City id' /><br />

                        {/* Add Image:<input type='file' onChange={handleImageChange} accept='image/*' /> */}

                        <button onClick={handleSubmitAdd}>Submit</button>


                    </div>
                )}
            </div>


            <div className='updateCar'>

                <button onClick={() => setShowFormm(true)}>update Car</button> <br /><br />

                {showFormm && (
                    <div>

                        Car Id :<input type="number" name='carId' value={carDetailss.carId} onChange={handleChangee} placeholder='CarId' /> <br />


                        Company :<input type="text" name='company' value={carDetailss.company} onChange={handleChangee} placeholder='Company' /> <br />

                        Model :<input type="text" name='model' value={carDetailss.model} onChange={handleChangee} placeholder='model' /><br />

                        Color:<input type="text" name='color' value={carDetailss.color} onChange={handleChangee} placeholder='Color' /><br />

                        Year :<input type="number" name='year' value={carDetailss.year} onChange={handleChangee} placeholder='year' /><br />

                        Rent_per_day :<input type="number" name='rentPerDay' value={carDetailss.rentPerDay} onChange={handleChangee} placeholder='rentPerDay' /><br />

                        City Id :<input type="number" name='city.id' value={carDetailss.city.id} onChange={handleChangee} placeholder='City id' /><br />

                        <button onClick={handleSubmitUpdate}>Submit</button>


                    </div>
                )}
            </div>

            <div className='deleteCar'>
                <button onClick={() => setShowForms(true)}>Delete Car</button> <br /><br />

                {showForms && (

                    <div>
                        Enter Car Id :<input type="number" name='carid' value={carDetailes.carid} onChange={handleChanges} placeholder='carid' /> <br />

                        <button onClick={handleSubmitDelete}>Submit</button>
                    </div>

                )}
            </div>

            <br /><br />

            <div>

                <div>
                    <p>See all the cars</p>
                    <button onClick={handleSubmitGet}>Click</button>
                </div>

                {cars.length > 0 && (
                    <div>
                        <h2>All Cars</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Company</th>
                                    <th>Model</th>
                                    <th>Color</th>
                                    <th>Year</th>
                                    <th>Rent Per Day</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.map(car => (
                                    <tr key={car.id}>
                                        <td>{car.id}</td>
                                        <td>{car.company}</td>
                                        <td>{car.model}</td>
                                        <td>{car.color}</td>
                                        <td>{car.year}</td>
                                        <td>{car.rentPerDay}</td>
                                        <td>{car.city.name}</td> {/* Assuming city object has a 'name' property */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

        </div>
    )
}

export default AdminActivity