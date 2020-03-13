import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";

const navBar = {
    color: '#DC3545',
    underline: '1px white',

};
export const Navbar = () => (
        <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
            <div className="navbar-brand" style={navBar}>
                Ежедневник Online
            </div>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link"
                             to="/" exact>Главная
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"
                             to="/about">Информация
                    </NavLink>
                </li>
            </ul>
        </nav>
    );

