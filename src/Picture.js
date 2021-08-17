import React from 'react'
import {Button,Image } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Camera from './Assets/Camera.png'
import './index.css'
import {LinkContainer} from 'react-router-bootstrap'

const Picture = () => {
    let history=useHistory()
    const HandleSubmit=()=>{
            history.push('/Camera')    
    }
    return (
        <>
        <main>
           <LinkContainer to='/Camera'>
            <Button  className='camera' onClick={HandleSubmit}> <Image  src={Camera} alt='logo'  className='img'/></Button>
            </LinkContainer>
        </main>
        </>
    )
}

export default Picture
