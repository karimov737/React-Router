import React from 'react'
import logo from "../assets/react.svg";
import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
    const links = [
        { url: "/", name: "Home" },
        { url: "/about", name: "About" },
        { url: "/cars", name: "Cars" },
        { url: "/products", name: "Products" },
    ]
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav_box">
                    <a href="#!" className="logo">
                        <img src={logo} alt="" />
                    </a>
                    <ul className="nav_list">
                        {links.map(link => (
                            <li key={link.name}>
                                <NavLink className="nav_link" to={link.url}>{link.name}</NavLink>
                            </li>
                        ))

                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav