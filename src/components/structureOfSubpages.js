import {Outlet} from 'react-router-dom'
import React from 'react'
import Header from './header'
import Footer from './footer'
import './structureOfSubpages.css'

export default function StructureOfSubpages(){
    
    return(
        <div className='containerPage'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}