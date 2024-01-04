import React, {useEffect, useState, useRef} from 'react'

// animacja strony
import Aos from 'aos'
import 'aos/dist/aos.css'

// stylizacja
import './newsletter.css'

// import komponentów
import Checkmark from '../Checkmark'

export default function Newsletter (){
    const emailValue= useRef()
    const [emailError, setEmailError] = useState(false)
	const url = 'https://sisicakebackend.azurewebsites.net/Newsletter'
    const [answer, setAnswer] = useState('')


    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])

      // wysyłanie newslettera

	const handleNewsletter = (e) =>{
		e.preventDefault()

		const currentEmailValue = emailValue.current.value
		const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

		if (!regEmail.test(currentEmailValue)){
			setEmailError(true)
			return
		}

		setEmailError(false)

        setAnswer('sending')

		const data = {'email': currentEmailValue}
		
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
          .catch(()=>
          setAnswer('error'))
	}

      return(
        <section className="sectionNewsletter">
            <div className="newsletterDiv" data-aos="fade-up">
                <p>
                Zapraszam do mojego świata słodkości! 
                <br/>Zapisz się do newslettera cukierni i bądź na bieżąco z naszymi smakowitymi nowościami i promocjami.
                </p>
        
                <div className='newsletterForm' data-aos="fade-up">
                    <form>
                        <label htmlFor="email-newsletter">Wpisz adres e-mail </label>
                            <input 
                                ref={emailValue}
                                placeholder="e-mail" name="email" 
                                type="email" 
                                id="email-newsletter" 
                                required 
                                data-error-text="Wpisz poprawny email"
                                autoComplete="email"/>
                            {emailError && 
                            <p className='errorNewsletter'>
                                Wprowadź poprawny adres e-mail
                            </p>}

                            {answer ==='' && (
                                <button 
                                type="submit" 
                                onClick={handleNewsletter}>
                                    Wyślij
                                </button>
                            )}
                            {answer ==='sending' && (
                                <div className='sending'>
                                    <p>Wysyłanie...</p>
                                </div>
                            )}
                            {answer ==='success' && 
                                <Checkmark/>
                                }
                            {answer ==='error' && 
                                <div className='sending'>
                                    <p>Błąd przesyłania</p>
                                </div>
                                }

                            
                    </form>
                </div>
            </div>

            <div className="newsletterDivDiscount" data-aos="fade-up">
                <p>
                Zapisując się do newslettera otrzymasz 10% zniżkę na pierwsze zamówienie.
                </p>
            </div>
        </section>
      )
}