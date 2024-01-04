import React, {useEffect} from "react"

// animacja strony
import Aos from 'aos'
import 'aos/dist/aos.css'

// import komponentów
import './textHome.css'
import logo from './../../media/LogoBezTła.svg'

export default function TextHome(){
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])

      return(
        <div className='textHomeContainer'>
          
          <div className='textHome'>
            <p data-aos="fade-up"> Witaj na stronie cukierni "SISI CAKES" – miejscu, gdzie smak, elegancja i pasja spotykają się, by stworzyć wyjątkowe doznania kulinarne. Nasza cukiernia specjalizuje się w tworzeniu monoporcji i tortów, które są nie tylko kulinarnym majstersztykiem, ale także dziełem sztuki.</p>
            {/* <p data-aos="fade-up">
            Nasze monoporcje to małe, ale pełne smaku arcydzieła, które zachwycają nie tylko podniebienie, ale i wzrok. Każda porcja to precyzyjnie skomponowana kompozycja smaków, tekstur i kolorów, która przykuwa uwagę i kusi do degustacji. Wybierając się w podróż przez nasze monoporcje, odkryjesz różnorodność smaków – od delikatnych owoców sezonowych po intensywne czekoladowe doznania.</p> */}
              
            <p data-aos="fade-up">
            Zapraszamy Cię do spróbowania słodkości cukierni "SISI CAKES", abyś mógł doświadczyć niezwykłych smaków i piękna w każdym kęsie i kawałku. Niech nasze monoporcje i torty stworzą niezapomniane chwile radości i uczty dla Twoich zmysłów.</p>
          </div>

          <div className='logoTextHome' >
            <img src={logo} alt="logo"/>
          </div>

        </div>
      )
}