import React, {useEffect} from "react"

// animacja strony
import Aos from 'aos'
import 'aos/dist/aos.css'

// ikony
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faAward } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile, faStar } from '@fortawesome/free-regular-svg-icons'

// import komponentów
import './squares.css'
import OneSquare from './../OneSquare'


export default function Squares(){
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])


    return(
        <div className="squares" data-aos="fade-up">
            <OneSquare 
                cardFront={(
                    <span>
                        <FontAwesomeIcon icon={faAward} className='iconSquare'/>
                        <p>Jakość</p>
                    </span>)}
                cardBack={
                    <p>W moich wypiekach stosuje wyłącznie naturalne składniki.
                    </p>}/>

            <OneSquare 
                cardFront={(
                    <span>
                        <FontAwesomeIcon icon={faCheck}className='iconSquare'/>
                        <p>Smak</p>
                    </span>)}
                cardBack={
                    <p>Każde ciastko to precyzyjnie skomponowana kompozycja smaków.</p>}/>
            

            <OneSquare 
                cardFront={(
                    <span>
                        <FontAwesomeIcon icon={faStar} className='iconSquare'/>
                        <p>Wygląd</p>
                    </span>)}
                cardBack={
                    <p>Wszystko co tworzę, robię z najwyższą starannością i dbałością o detale.</p>}/>

            <OneSquare 
                cardFront={(
                    <span>
                        <FontAwesomeIcon icon={faFaceSmile} className='iconSquare'/>
                        <p>Zadowolenie Klienta</p>
                    </span>)}
                cardBack={
                    <p>Każde zamówienie jest dopasowane do indywidualnych potrzeb klienta.</p>}/>

        </div>
    )
}