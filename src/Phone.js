import React, { useEffect } from 'react'
import { Form,Button } from 'react-bootstrap'
import {useState} from 'react'
import Loading from'./Loading'
import {LinkContainer} from 'react-router-bootstrap'
import { useHistory } from 'react-router'


const Phone = () => {
  let history=useHistory()
    const[Phone,setPhone]=useState();
    const[loading,setLoading]=useState(true);
    const HandleSubmit=(e)=>{
      e.preventDefault();
     if(Phone){
      setLoading(false) 
      setPhone('')
      
        setTimeout(()=>{
        history.push('/Picture')

        },1000)
     }
     
     else{
       setLoading(true)
       setPhone('')
     }
  
          
        }
        
    
        
 
    return (
        <>
          <main >
     <h1 >Enter Phone Number</h1> 
     <Form className='input' >
       <div>
     <Form.Control size="lg" type="text" placeholder="Phone number" value={Phone} onChange={(e)=>{setPhone(e.target.value)}} />
     </div>
  
 
  
     </Form>
     <LinkContainer to='/Picture'>
     <Button variant="primary" type="submit" onClick={HandleSubmit}>
    Submit
  </Button>
  </LinkContainer>
     </main>
     <aricle className='loading'>
     <h1> {loading ? '' : <Loading/>}</h1>
     </aricle>   
        </>
    )
}

export default Phone
