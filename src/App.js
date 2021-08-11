import React from 'react'
import './index.css'
import { Form,Button,Image } from 'react-bootstrap'
import {useState} from 'react'
import Loading from'./Loading'
import { BrowserRouter as  Router , Route} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Phone from './Phone'
import Picture from './Picture'
import pic from './Assets/greentick1_4x.png'
import pic1 from './Assets/greentick2_4x.png'
import pic2 from './Assets/Packazoid_(4).png'
import pic3 from './Assets/Packazoid_(3).png'
import {LinkContainer} from 'react-router-bootstrap'
import Header from './Header'
import Final from './Final'


const App = () => {
 

  
  return (
    <>
   

   <Router>
    <Route path='/'   component={Header}/>
     <Route path='/'  component={Phone} exact/>
     <Route path='/Picture' component={Picture}/>
     <Route path='/Final' component={Final}/>
     
   </Router>
    </>
  )
}

export default App

