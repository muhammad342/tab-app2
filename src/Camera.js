import React from 'react'
import Webcam from 'react-webcam'
import {useRef,useState} from 'react'
import { useHistory } from 'react-router'
import { Button,Image } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Camera = () => {
    const[Img,setImg]=useState();
    const[Capture,setCapture]=useState(false);
    const WebRef=useRef(null);
    let history=useHistory();
    const HandleCapture=()=>{

        setImg(WebRef.current.getScreenshot())
        setCapture(true);
               
        
    }
    const HandleSubmit=()=>{
        if(Img){
                history.push('/Final')
        }

    }
    return (
        <>
         <main>
            
         <Webcam  ref={WebRef}/>  
        </main>  
        <article className='button'>
        
        <Button  onClick={HandleCapture}>Capture</Button>
        <Button  className='btn1' onClick={HandleSubmit}>Submit</Button>
        
       
            </article> 
            <article className='button'>
            {Capture ?   (<Image  src={Img} alt='logo'  className='img'/>) : ''}

            </article>
        </>
    )
}

export default Camera
