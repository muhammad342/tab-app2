import React from 'react'
import { Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import pic3 from './Assets/Packazoid_(3).png'

const Header = () => {
    return (
        <>
        
        <LinkContainer to='/'>
          <Image src={pic3} alt='logo'  className='img'/>  
          </LinkContainer>
          
        </>
    )
}

export default Header
