import React, {useEffect} from "react"

// animacja
import Aos from 'aos'
import 'aos/dist/aos.css'

// css
import './oneSquare.css'

export default function OneSquare(props){

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])


    return(
        <div className="squareDiv" data-aos="fade-up">
            <div className="square" style={props.styleSquare}>
                <div className="cardFront">
                   {props.cardFront}
                </div>
                <div className='cardBack'>
                    {props.cardBack}
                </div>
                
            </div>
        </div>
    )
}