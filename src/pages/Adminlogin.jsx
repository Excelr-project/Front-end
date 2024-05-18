import axios from 'axios';
import React, { useState } from 'react';
import "../styles/Adminlogin.css";

const Adminlogin = () => {

    const [email, setEmail] = useState('');
    const [key, setKey] = useState('');
    const [generatedKey, setGeneratedKey] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [loggedIn, setLoggedIn] = useState(false);
    const [SigninMessage, setSigninMessage] = useState('');

    const handleGenerateKey = async () => {

        try {
            const res = await axios.post("http://localhost:8080/admin/generateKey?email=" + email);
            alert("key generated");
            setGeneratedKey(res.data);

        } catch (error) {
            alert("error login");
        }
    };

    const handleSignIn = () => {

        const enteredKey = document.getElementById('key').value;
        if (generatedKey === enteredKey && key.length > 0) {
            setSigninMessage("Signin Succesful");
            alert("signin succesful");
            window.location.href = './AdminActivity';
        } else {
            setSigninMessage("Fill all the Fields");
            alert("Please fill all the fields !");
        }
    }


    return (


        <div className='admin'>

            <div className="left"></div>

            <div className="right">
                <div>
                    <h2>Admin Log-in</h2>
                    <label htmlFor="Email">Email :</label> <br />
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <br />
                    <button onClick={handleGenerateKey}>Generate key</button>
                </div>

                <br />


                <div>
                    <label htmlFor="key">Key :</label> <br />
                    <input type="text" id='key' value={key} onChange={(e) => setKey(e.target.value)} />
                </div>


                <div>
                    <br />
                    <button onClick={handleSignIn}>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Adminlogin