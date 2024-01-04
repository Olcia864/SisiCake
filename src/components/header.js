import React, {useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from '../LogoBezTła.svg'
import './header.css'
import NavLong from './navlong'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Header (){
    const [sticky, setSticky] = useState(false)
    const [menuClassName, setMenuClassName] = useState('menu hidden')
    const token = useLoaderData()
    const [logoutButton, setLogoutButton] = useState(false)
    
    useEffect(()=>{
    if (!token){
      setLogoutButton(false)
    }
    else{
      setLogoutButton(true)
    }},[token])


    function changeNav () {
        if (window.innerWidth <= 960) {
          setMenuClassName('menu hidden')
        } else {
          setMenuClassName('menu')
        }
      }

    function handleScroll () {
        if(window.scrollY > 0){
            setSticky(true)
        }
        else{
            setSticky(false)
        }
    }

    function showMenu(){
      setMenuClassName('menu')
    }

    function closeMenu(){
      setMenuClassName('menu hidden')
    }

    function logoutHandler(){
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('expiration')
      setLogoutButton(false)
      window.location.reload()
    }
   
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', changeNav)

    return(
        <header className={(sticky) ? 'sticky' : undefined}>

            <div className="logo">
                <Link to='/'><img src={logo} alt='logo'/></Link>
            </div>

            <div className="logout">
            {logoutButton && <button className='buttonLogout' onClick={logoutHandler}>Wyloguj</button>}   
            </div>
            
            <div className={menuClassName} onMouseLeave={closeMenu}>
            <NavLong/>
            </div> 
            
            <FontAwesomeIcon icon={faBars} className='menuButton' onMouseMove={showMenu}/>
        </header>
    )
}
export default Header