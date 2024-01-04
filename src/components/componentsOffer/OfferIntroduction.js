import React, {useEffect} from "react";
import { HashLink } from 'react-router-hash-link'

// css
import './offerIntroduction.css'

// animacja
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function OfferIntroduction (){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])

    return (
        <div className="firstPartOfferComponent">
                <div className="textOffer" data-aos="fade-up">
                    <p>
                    Jeśli szukasz wyjątkowych i pysznych tortów oraz monoporcji, to serdecznie zachęcam do zapoznania się z naszą ofertą. Nasza cukiernia oferuje szeroki wybór wspaniałych smaków i pięknych dekoracji, które z pewnością zaspokoją Twoje podniebienie i ucieszą oko. 
                    </p>
                </div>

                <div className="offer-cakes-monoportions" data-aos="fade-up">
                    <HashLink smooth to='#cakes'>
                        <div className="offerBox">
                            <div className="offer cakes">
                                <p>TORTY</p>
                            </div>
                        </div>
                        
                    </HashLink>
                    <HashLink smooth to='#monoportions'>
                        <div className="offerBox">
                            <div className="offer monoportions">
                                <p>MONOPORCJE</p>
                            </div>
                        </div>
                    </HashLink>
                </div>
            </div>
    )
}