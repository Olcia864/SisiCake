import React, {useEffect} from "react"

// stylizowanie css
import './aboutme.css'

// animacja
import Aos from 'aos'
import 'aos/dist/aos.css'

// import plików
import myPicture from '../media/myPicture.webp'




export default function AboutMe(){
    
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])

    return (
      <div className="container">

        <div className='containerAboutMe' data-aos="fade-up">

          <div className="myPicture">
            <img src={myPicture} alt='myPicture'/>
          </div>

          <div className="textAboutMe">
            <p>
            Cześć! Jestem Ola i miło mi cię u mnie gościć.
            </p>
            <p>
            Jestem absolwentką biotechnologii i twórczą duszą pracowni "Sisi Cakes". 
            </p>
            <p>
            Moja fascynacja cukiernictwem zrodziła się kilka lat temu i od tamtego czasu nieustannie doskonalę swoje umiejętności, by z każdym dniem dostarczać Wam coraz lepsze doznania smakowe.
            </p>
            <p>
            Specjalizuję się w tworzeniu wyjątkowych monoporcji i tortów musowych, łącząc precyzję wykonania i pełnię smaku. Każda słodkość to dla mnie małe dzieło sztuki, którym chcę się z wami dzielić.
            </p>
            <p>
            Poza pracą kocham odkrywać świat podczas podróży. Moje serce najszybciej bije w górach,
            Podróże to dla mnie nie tylko odpoczynek, ale i inspiracja do tworzenia nowych, niepowtarzalnych smaków.
            </p>

          </div>

        </div>

        <div className="footerAboutMe" data-aos="fade-up">
          <p>
            Zapraszam was do podróży po świecie smaków wraz z pracownią "Sisi cakes".
          </p>
          <p>
          🍰💖🌍
          </p>
        </div>

      </div>
    
      
    
    )
}