import React, { useState, useEffect} from "react"
import { useLoaderData } from "react-router-dom"

// linki
import './portfolio.css'

// ikony
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus }  from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

// animacja
import Aos from 'aos'
import 'aos/dist/aos.css'
import LoaderAnimation from "../components/loaderAnimation"



export default function Portfolio(){
    const url = 'https://sisicakebackend.azurewebsites.net/Images'
    const tokenLoader = useLoaderData()
    const token = sessionStorage.getItem('token')
    const [file, setFile] = useState()
    const [errorFile, setErrorFile] = useState(false)
    const [dataImages, setDataImages] = useState([])
    const [inputFileShown, setInputFileShown] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
// animacja strony

    useEffect(() => {
      Aos.init({ duration: 2000 })
    }, [])

// sprawdzenie tokenu

    useEffect(()=>{
      if (!tokenLoader){
        setInputFileShown(false)
      }
      
      else{
        setInputFileShown(true)
      }},[tokenLoader])



// dodawanie zdjeć

    const uploadFiles = (e) => {
      if (e.target.files) {
          setFile(e.target.files[0])
        }
        setErrorFile(false) 
    }

    const handleUploadClick = () => {
        
        if (!file) {
          setErrorFile(true)
          return;
        }

        const formData = new FormData()
        formData.append('file', file)

        setIsLoading(true)
      
        fetch(url, {
          method: 'POST',
          body: formData,
          headers: {
            'Authorization': `Bearer ${token}`
          },
        })
          .then(()=>{
            downloadFiles()
            setIsLoading(false)
          })
          .catch((err)=>{
            console.error(err)
            setIsLoading(false)
          })}

    
// pobieranie zdjęć

    async function downloadFiles(){
      const response = await fetch(url)
      const data = await response.json()
      setDataImages(data)
    }
    
    useEffect((
      ()=>{
      downloadFiles()
    }
    ),[])


// usuwanie zdjęć

    const deleteHandler = (id) => {
      fetch(url+'/'+id, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(()=>{
        downloadFiles()
      })
      .catch((err) => {
        console.error(err)
      })
    }
    
    return (
      <div className='portfolioPage'>
        <div className='showPicture' data-aos="fade-up">
          {dataImages.map((el)=>(
          <div key={el.id} className="imgDiv">
            <img className="portfolioPictures" src={el.url} alt='cake' data-aos="fade-up"/>
            {inputFileShown &&
            <FontAwesomeIcon icon={faCircleXmark}  className="iconDelete" onClick={()=>{deleteHandler(el.id)}} />}
          </div>
          ))}
          
          </div>
          {inputFileShown && (
            <div className='addPictures' data-aos="fade-up">
              
              {isLoading? 
              <LoaderAnimation/> : 
              (<>
                <label>
                  <input type='file' onChange={uploadFiles}/>
                  {file? <p>{file.name}</p> : <p>Wybierz plik</p>}
                </label>
                <button className='buttonPlus' onClick= {handleUploadClick}>
                  <FontAwesomeIcon icon={faPlus}/>
                </button>
              </>
              )}
      
              {errorFile && <p className='errorPortfolio'>Wybierz poprawny plik</p>}
              
            </div>
           )}
        
      </div>
    )
}