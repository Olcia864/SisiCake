import React from "react"

// import komponentów
import TextHome from "./TextHome"
import Squares from "./Squares"
import './sectionTwoHome.css'


export default function SectionTwoHome(){

    return(
        <section className="sectionTwo">
            <TextHome/>
            <Squares/>
        </section>
    )
}