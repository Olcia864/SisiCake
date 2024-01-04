import React from "react"

// import komponentów
import Header from "../components/header"
import Footer from "../components/footer"
import sadCupcake from '../media/sadCupcake.webp'

// stylizacja
import './errorPage.css'

export default function ErrorPage (){

    return(
        <>
        <Header/>
            <div className="errorPageContainer">
                <p>
                    Podany adres strony nie istnieje.
                </p>
                <img src={sadCupcake} alt='cupcake'/>
            </div>
        
        <Footer/>
        </>
        
        
    )
}