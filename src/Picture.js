import React from 'react'
import {Button,Image } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Camera from './Assets/Camera.png'
import './index.css'

const Picture = () => {
   
    let history=useHistory()
  
    
   
    const HandleSubmit=()=>{
       
     
     
            history.push('/Camera')
    
          
    
        
     
          
    }
    
 
    return (
        <>
        <main>
           
            <Button  className='camera' onClick={HandleSubmit}> <Image  src={Camera} alt='logo'  className='img'/></Button>
            
        </main>
  

        </>
    )
}

export default Picture
