import React from "react"

// css
import './offer.css'

// import komponentów
import ListOfProducts from '../components/componentsOffer/ListOfProducts'
import OfferIntroduction from "../components/componentsOffer/OfferIntroduction"


export default function Offer(){


    return (
        <div className="offerContainer">
            <OfferIntroduction/>

            <div id="cakes">
                <ListOfProducts parametr={'Cakes'}/>
            </div>

            <div id="monoportions">
                <ListOfProducts parametr={'Monoportions'}/>
            </div>

            <div className="offerConclusion">
                <p>
                Aby dowiedzieć się więcej i uzyskać pełną, spersonalizowaną ofertę, skontaktuj się z nami poprzez formularz kontaktowy na naszej stronie internetowej, dzwoniąc pod podany numer telefonu lub pisząc na podany adres e-mail. 
                Zachęcamy również do kontaktu poprzez serwisy społecznościowe.
                </p>
                <p>
                Jesteśmy gotowi, aby uczynić Twoje wydarzenie wyjątkowym i słodkim!
                </p>
            </div>      

        </div>

    )
}