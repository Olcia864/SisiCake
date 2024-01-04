import React, {useEffect} from "react"
import { Link } from 'react-router-dom'

// animacja strony
import Aos from 'aos'
import 'aos/dist/aos.css'

// import komponentów
import './sectionOneHome.css'

export default function SectionOneHome (){
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])

      return(
        <section className="sectionOne">
            <div className="oneText" data-aos="fade-up">
                <h1 className="textGlass">SISI CAKES</h1>
                <p>WYJĄTKOWE SŁODKOŚCI 
                    <br/> NA KAŻDĄ OKAZJĘ
                </p>
                <Link to='/offer'>ZOBACZ OFERTĘ</Link>
            </div>
        </section>
      )
}