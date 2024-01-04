import React from "react"
import {useEffect, useState} from "react"
import {Link} from 'react-router-dom'

// ikony
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

// animacja strony
import Aos from 'aos'
import 'aos/dist/aos.css'

// import komponenetów
import OneSquare from "../components/OneSquare"
import Checkmark from "../components/Checkmark"

// stylizacja
import './contact.css'



export default function Contact(){

    const url = 'https://sisicakebackend.azurewebsites.net/Contact'
    const regName = /[a-zA-Z]{3,}/i
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const regText = /^.{5,}$/i
    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [textValue, setTextValue] = useState('')
    const [didEditName, setDidEditName] = useState(false)
    const [didEditEmail, setDidEditEmail] = useState(false)
    const [didEditText, setDidEditText] = useState (false)
    const [answer, setAnswer] = useState('')
    
   
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])

   
    const formContactHandler = (event) => {
        event.preventDefault()

        if(!regName.test(nameValue) || !regEmail.test(emailValue) || !regText.test(textValue)){
            return
        }
        
        setAnswer('sending')

        const data = {
            name: nameValue,
            email: emailValue,
            message: textValue,
        }
        
        fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
			'Content-Type': 'application/json'
			},
		  })
          .then((res)=>{
            if (res.ok){
                setAnswer('success')
            }
            else{
                setAnswer('error')
            }
          })
          .catch(()=>{
            setAnswer('error')})
    }
    
    return (
       <div className='containerContact'>
        <div className="sectionContactForm">
            <div className="contactFormLabel" data-aos="fade-up">
                <p>
                Jeśli masz pytania, sugestie lub chciałbyś złożyć zamówienie, skorzystaj z formularza kontaktowego, a my postaramy się odpowiedzieć na Twoją wiadomość tak szybko, jak to możliwe.
                </p>
            </div>
            <div className="contactFormDiv" data-aos="fade-up">
            <form className='contactForm' >
                <h2>Formularz kontaktowy</h2>     
                <label htmlFor="name">
                    Podaj swoje imię
                    </label>
                    <input value={nameValue} onChange={(e)=>setNameValue(e.target.value)} onBlur={()=>setDidEditName(true)} type='text' placeholder="imię" id="name" name="name" required/>
                    {!regName.test(nameValue) && didEditName &&
                        <p className='errorContactForm'>
                            Wprowadź poprawne imię
                        </p>}
                <label htmlFor="mail">
                    Podaj swój adres e-mail
                    </label>
                    <input value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} onBlur={()=>setDidEditEmail(true)} type='email' placeholder="e-mail" id="mail" name="mail" required/>
                    {!regEmail.test(emailValue) && didEditEmail &&
                        <p className='errorContactForm'>
                            Wprowadź poprawny adres e-mail
                        </p>}
                <label htmlFor="message">
                    Wpisz treść wiadomości
                    </label>
                    <textarea value={textValue} onChange={(e)=>setTextValue(e.target.value)} onBlur={()=>setDidEditText(true)} placeholder="wiadomość" id="message" name="message" rows='3' minLength='5' required/>
                    {!regText.test(textValue) && didEditText &&
                        <p className='errorContactForm'>
                            Wprowadź wiadomość
                        </p>}

                    {answer==='' && 
                        (<button type='submit' onClick={formContactHandler}>
                            <p>Wyślij</p>
                        </button>)
                    }
                    {answer==='sending' && 
                        (<div className='sending'>
                            <p>Wysyłanie...</p>
                        </div>)
                    }
                    {answer==='success' && 
                        <Checkmark/>
                    }
                    {answer==='error' && 
                        (<div className='sending'>
                            <p>Błąd przesyłania</p>
                        </div>)
                    }
                    


            </form>
            </div>
        </div>
        <div className="contactSocialMediaDiv">
            <div className="contactSocialMediaLabel" data-aos="fade-up">
                <p>
                Jeśli wolisz rozmowę telefoniczną, zadzwoń do nas pod numer, który znajdziesz poniżej. 
                </p>
                <p>
                Odwiedź też nasze profile na platformach społecznościowych, takich jak Facebook czy Instagram, aby być na bieżąco z naszymi najnowszymi ofertami, promocjami i zdjęciami naszych smakowitych tortów oraz monoporcji. Możesz także wysłać nam wiadomość bezpośrednio przez te platformy.
                </p>
            </div>
            <div className="contactSocialMediaIcons">
                <div className="squaresContact" data-aos="fade-up">
                    
                    <OneSquare
                    cardFront={
                        <span>
                        <FontAwesomeIcon icon={faPhone}/>
                        <p>723 110 459</p>
                        </span>
                    }
                    styleSquare={{transform: 'rotateY(0)'}}
                    />
    
                    <OneSquare
                    cardFront={
                        <span className="mailContact">
                        <FontAwesomeIcon icon={faEnvelope} />
                            <p>pracowniasisicakes
                            <br/>@gmail.com
                            </p>
                        </span>
                    }
                    styleSquare={{transform: 'rotateY(0)'}}
                    />
                    
                    <OneSquare
                    cardFront={
                        <span className="contactLink">
                            <Link to='https://www.facebook.com/' target="_blank" >
                                <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                        </span>
                    }
                    styleSquare={{transform: 'rotateY(0)'}}
                    />

                    <OneSquare
                    cardFront={
                        <span className="contactLink">
                            <Link to='https://www.instagram.com/'  target="_blank">           
                                <FontAwesomeIcon icon={faInstagram} /> 
                            </Link>
                        </span>
                    }
                    styleSquare={{transform: 'rotateY(0)'}}
                    />     

                </div>
            </div>
        </div>
        
        
       </div>)
}