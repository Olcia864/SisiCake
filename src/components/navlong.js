import React from 'react'
import './navlong.css'
import { NavLink } from 'react-router-dom'


export default function NavLong (){

    return (
    <nav>
        <ul>
            <li>
                <NavLink to='/home' className={({ isActive}) =>
                isActive ? "active" : ""}>
                    Strona Główna
                </NavLink>
            </li>
            <li>
                <NavLink to='/offer' className={({ isActive}) =>
                isActive ? "active" : ""}>
                    Oferta
                </NavLink>
            </li>
            <li>
                <NavLink to='/aboutme' className={({ isActive}) =>
                isActive ? "active" : ""}>
                    O mnie
                </NavLink>
            </li>
            <li>
                <NavLink to='/portfolio' className={({ isActive}) =>
                isActive ? "active" : ""}>
                    Portfolio
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact' className={({ isActive}) =>
                isActive ? "active" : ""}>
                    Kontakt
                </NavLink>
            </li>
        </ul>
    </nav>
    )
}