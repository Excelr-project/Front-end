import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import "../styles/Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
    const [pin, setPin] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPasword] = useState("");

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.get("http://localhost:8080/signin", {
                params: {
                    email: formData.email,
                    password: formData.password
                }
            });

            const userDTO = res.data;
            if (userDTO && userDTO.id) {
                localStorage.setItem('userId', userDTO.id);
                window.location.href = '/search';
            }
        } catch (error) {
            alert("Error sign-in");
        }
    }

    const handleForgotPassword = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/ForgotPassword", {
                email: formData.email
            });
            // const pin = res.data;
            alert("Check Email for Password reset link"); setShowForgotPasswordForm(true);
            // setPin(pin);
        } catch (error) {
            alert("Error sending password Link");
        }
    }

    const handleResetPassword = async (event) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:8080/ResetPassword", {
                token: pin,
                NewPassword: newPassword,
                confirmPassword: confirmNewPassword
            });
            alert("Password Updated Succesfully");
            setShowForgotPasswordForm(false);
        } catch (error) {
            alert("Failed to Update Password");
        }
    }

    return (

        <div className="login-page" >

            <div className="leftcontainer">

            </div>
            <div className="rightcontainer">
                <h2>Sign-in</h2>
                <div className="signin">
                    <form onSubmit={handleOnSubmit}>

                        <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email' required />

                        <input type="password" id='password' name="password" value={formData.password} onChange={handleChange} placeholder='Enter your password' required />

                        <Button>Sign in</Button>
                    </form>
                </div>

                <div className="forgotpassword">
                    <span>To create New Password, click below</span>
                    <Button onClick={handleForgotPassword}>Forgot Password</Button>
                    {showForgotPasswordForm && (
                        <form onSubmit={handleResetPassword}>
                            <input type="pin" id='pin' name="pin" value={pin} onChange={(e) => setPin(e.target.value)} placeholder='Enter Pin' required />


                            <input type="password" id='newPassword' name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Enter New Password' required />

                            <input type="password" id='confirmNewPassword' name="confirmNewPassword" value={confirmNewPassword} onChange={(e) => setConfirmNewPasword(e.target.value)} placeholder='Confirm New Password' required />

                            <Button>Change Password</Button>
                        </form>
                    )}
                </div>

                <span>New User ? then <a href="/register">click here</a> to register</span>


            </div>

        </div>
    );
}

export default Login