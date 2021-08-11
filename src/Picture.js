import React from 'react'
import {Form,Button,Image } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useState} from 'react'
import Loading from './Loading'
import { useHistory } from 'react-router'


const Picture = () => {
    let history=useHistory()
    const [File, setFile] = useState();
    const[loading,setLoading]=useState(true);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const HandleSubmit=(e)=>{
        e.preventDefault();
     
        
        setFile('')
        setLoading(false)
        setIsFilePicked(true)
        setTimeout(()=>{
            history.push('/Final')
    
            },1000)
          
    }
 
    return (
        <>
        <main>
            <Form.Group controlId="formFile" className="mb-3">
    
    <input type="file" name="file" value={File} onChange={(e)=>{setFile(e.target.value)}} />
    <LinkContainer to='/Final'>
     <Button variant="primary" type="submit" onClick={HandleSubmit}>
    Upload
  </Button>
  </LinkContainer>
  </Form.Group>
 {isFilePicked ? <Image src={File} alt='image'/>: ''}
 
  
 
  </main>
  <article className='loading'>
        <h1> {loading ? '' : <Loading/>}</h1>  
        </article>

        </>
    )
}

export default Picture
