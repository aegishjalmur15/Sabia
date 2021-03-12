import React, { useState } from 'react'
import { Link, useHistory} from 'react-router-dom'
import api from '../services/API'
import "../styles/regisAndLogin.css"
import {FiArrowLeftCircle, FiLogIn} from 'react-icons/fi'
export default function Login(){
    const history = useHistory()
    const [passwd, setPasswd] = useState('')
    const [email, setEmail] = useState('')
    console.log(localStorage.getItem("token"))
    function handleSubmit(event){
        api.post('auth',{
            email: email,
            password:passwd,
        }).then(res => {   
            if(localStorage.getItem("token")){
                localStorage.removeItem("token");
            }
            localStorage.setItem('token', res.data.token);
            history.push('/main')
        }).catch(err=>{
            alert(err)
        })
    }
    
    return(
        <div className="loginWrapper">
            <div className="form">
            <h1 className="form-header">Login</h1>
            <div className="form-sections">
                <section>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" onChange={event=>setEmail(event.target.value)} placeholder="Ex: test@example.com" />
                </section>
                <section>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={event => setPasswd(event.target.value)}/>
                </section>
                <section>
                    <button className="submitBnt" type="submit" onClick={handleSubmit}>
                        <FiLogIn size="1.5rem" color="rgb(255,255,255)"/>
                    </button>
                </section>
                <Link to="/" className="enter-app">
                    <FiArrowLeftCircle size="2rem" color="rgb(255,255,255)" />
                </Link>
                
            </div>
        </div>
        </div>
        
    )
}
