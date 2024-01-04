import React from "react";
import {Link} from 'react-router-dom'
import './footer.css'

// ikony
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


export default function Footer(){
	

    return(
    <footer>
		<div className="top">
			<div className="about">
				<p>SISI cakes</p>
				<p>Łódź i okolice</p>
			</div>
			
			<div className="contactFooter">
				<p>
				<FontAwesomeIcon icon={faPhone} className="telIcon"/>
				 723 110 459
				</p>
				<p>
				<FontAwesomeIcon icon={faEnvelope} className="mailIcon"/>
				 pracowniasisicakes@gmail.com
				</p>
			</div>

			<div className="contactIcon">
				<Link to='https://www.instagram.com/' className="contact insta" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
				<Link to='https://www.facebook.com/' className="contact fb" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></Link>
				
			</div>
		</div>

		<div className="down">
			<p>© 2023 wszelkie prawa zastrzeżone
			</p>
		</div>
	</footer>
)
}