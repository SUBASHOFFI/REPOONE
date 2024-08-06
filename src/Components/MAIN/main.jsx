import React ,{useState} from 'react';
import "./main.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Main = () => {

  
  
    const navigate=useNavigate();
  
    
    const SIGN_IN = () => {
       navigate('/Signin')
        // Add your custom functionality here
      }
    const SIGN_UP = () => {
       navigate('/Signup')
        // Add your custom functionality here
      }
    const RESET = () => {
       navigate('/Forgot')
        // Add your custom functionality here
      }
    
    
  
    
        
       
        
  

    return (
        <div className='In'>



            <div class="likebody">
        <div class="center-element">
            <button onClick={SIGN_IN}>
         

            <a href="#SIGN-IN">LOGIN</a>
         
            </button>
        </div>


        <div class="center-element">
            <button onClick={SIGN_UP}>
            <a href="#SIGN-UP">SIGN-UP</a></button>
        </div>
        <div class="center-element">
            <button onClick={RESET}><a href="#RESET">RESET</a></button>
        </div>
    </div>
   

        </div>
    );
};

export default Main;