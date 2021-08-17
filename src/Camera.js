import React from 'react'
import Webcam from 'react-webcam'
import {useRef} from 'react'
import { useHistory } from 'react-router'
import { Button } from 'react-bootstrap'

const Camera = () => {
    const WebRef=useRef(null);
    let history=useHistory();
    const HandleCapture=()=>{
        console.log(WebRef.current.getScreenshot())
        setTimeout(()=>{
            history.push('/Final')
    
            },1000)
    }
    return (
        <>
         <main>
            
         <Webcam  ref={WebRef}/>  
        </main>  
        <article className='button'>
        <Button  onClick={HandleCapture}>Capture</Button>
            </article> 
        </>
    )
}

export default Camera
