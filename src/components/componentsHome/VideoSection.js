import React, {useMemo} from "react"

// import komponentów
import wideoTlo from './../../media/cherry.mp4'
import './videoSection.css'

export default function VideoSection (){

    const video = useMemo(()=>
    // eslint-disable-next-line
        (<video className="videoBackground" src={wideoTlo} autoPlay loop muted/>),[wideoTlo]
    )
   
      return(
        <section className="sectionThree">
            <div className="backgroundThree">
            {video}
            </div>
            <div className="threeText">
                <p>Tworzone z pasji do cukiernictwa</p>
            </div>
            <div className='overlayThree'></div>
        </section>
      )
}