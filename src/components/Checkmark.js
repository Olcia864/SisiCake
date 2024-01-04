import React from "react"

// stylizowanie
import './checkmark.css'

export default function Checkmark(){
    return(
        <div className='checkmarkContainer'>
            <p>Wiadomość została wysłana</p>
            <span className="checkmarkSvg">
                <svg x="0px" y="0px"  fill="none" viewBox="0 0 25 30" className="checkmarkSvg">
                    <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/>
                </svg>
            </span>
        </div>
    )
}