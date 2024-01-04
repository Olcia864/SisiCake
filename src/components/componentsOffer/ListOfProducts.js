import React, {useEffect, useState} from "react"

// css
import './listOfProducts.css'
import './../oneSquare.css'

// animacja
import Aos from 'aos'
import 'aos/dist/aos.css'

// import komponentów
import OneSquare from "../OneSquare"

export default function ListOfProducts (props){
    const [dataProducts, setDataProducts] = useState([])
    const url = 'https://sisicakebackend.azurewebsites.net/'+props.parametr

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])    
    
    async function downloadData(){
        const response = await fetch(url)
        const data = await response.json()
        setDataProducts(data)
    }

    useEffect(
        ()=>{
            downloadData()
        }
        // eslint-disable-next-line
        ,[])
    
   
    return (
        <div className="offerCakesContainer">
            <div className="offerCakesLabel">
                {props.parametr === 'Cakes' && <p>TORTY</p>}
                {props.parametr === 'Monoportions' && <p>MONOPORCJE</p>}
            </div>

            <div className="productContainer">
                {dataProducts.map(((el)=>(
                    <OneSquare 
                    cardFront={<>
                        <img src={el.imageUrl} alt='product'/>
                        <p className="productName">{el.name}</p>
                        <div className='shadow'></div>
                    </>
                    }
                    cardBack={
                        <p>{el.description}</p>
                    }
                    styleSquare={{width:250, height: 250}}
                    />
                    )
                ))
                }
            </div>

        </div>
        
    )
}