import React from "react"

// import komponentów
import SectionOneHome from "../components/componentsHome/SectionOneHome"
import SectionTwoHome from "../components/componentsHome/SectionTwoHome"
import VideoSection from "../components/componentsHome/VideoSection"
import Newsletter from "../components/componentsHome/Newsletter"
import './home.css'


export default function Home(){


    return (
    <div className='containerHome'>
        <SectionOneHome/>
        <SectionTwoHome/>
        <VideoSection/>
        <Newsletter/>
    </div>)
}