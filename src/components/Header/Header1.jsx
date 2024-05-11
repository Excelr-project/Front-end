import React, { useRef } from "react";

import { NavLink } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "../../pages/register";
import "../../styles/header1.css";

const navLinks = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/about",
        display: "About",
    },
    {
        path: "/cars",
        display: "Cars",
    },

    {
        path: "/blogs",
        display: "Blog",
    },
    {
        path: "/contact",
        display: "Contact",
    },
];

const Header = () => {
    const menuRef = useRef(null);
    // const [showAlert, setShowAlert] = useState(false);

    const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure to Logout");
        if (confirmLogout) {
            window.location.href = '/login';
        }
    };

    return (


        <header className="header ">

            <div className="logout">

                <Button variant="contained" color='bright' onClick={handleLogout}>Log-Out</Button>
            </div>


            {/* ========== main navigation =========== */}


            <div className="main__navbar bg-dark">
                <Container>
                    <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                        <span className="mobile__menu">
                            <i class="ri-menu-line" onClick={toggleMenu}></i>
                        </span>

                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu">
                                {navLinks.map((item, index) => (
                                    <NavLink
                                        to={item.path}
                                        className={(navClass) =>
                                            navClass.isActive ? "nav__active nav__item" : "nav__item"
                                        }
                                        key={index}
                                    >
                                        {item.display}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                    </div>
                </Container>
            </div>


        </header>
    );
};

export default Header;
