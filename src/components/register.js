import React, { useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowRightCircle} from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'
import api from '../services/API'
export default function Register(){
    const history = useHistory()
    const [passwd, setPasswd] = useState('')
    const [cPasswd, setCPasswd] = useState('')
    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [userImage, setUserImage] = useState('')

     function handleSelectedUserImage(event){
        if(!event.target.files){
            return
        }
        const selectedUserImage = Array.from(event.target.files)
        setUserImage(selectedUserImage[0])
    }
   
    const data = new FormData

    data.append("email", email);
    data.append("password", passwd);
    data.append("name", username);
    data.append("userImage", userImage);

    function handleSubmit(event){
        api.post('users', data).then(res => {
            alert('Cadastro feito com sucesso!');
            history.push('/log')
        })
    }

    return(
        <div className="form">
            <h1 className="form-header">Register <FaUserCircle size='2rem' color='#603473'/></h1>
            <div className="form-sections">
                <section>
                    <label htmlFor="name">Username</label>
                    <input id="name" type="text" onChange={event => setUsername(event.target.value)} placeholder="Ex: johnny cash" required/>
                </section>
                <section>
                    <label htmlFor="Email">Email</label>
                    <input id="Email" type="text"  onChange={event => setEmail(event.target.value)} placeholder="Ex: johnny.cash@email.com" required/>
                </section>
                <section>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={event => setPasswd(event.target.value)} required/>
                </section>
                <section>
                    {
                        passwd === cPasswd ? (
                            <label htmlFor="c-pass">Confirm password</label>
                        ):(
                            <label htmlFor="c-pass" className="dontMatch">Confirm password: passwords don't match</label>
                        )
                    }
                    
                    <input id="c-pass" type="password"  onChange={event=> setCPasswd(event.target.value)} required/>
                </section>
                <section>
                    <label htmlFor="userImage">Select a profile image</label>
                    <input id="userImage" type="file" onChange={handleSelectedUserImage} required/>
                </section> 
                <section>
                    <button className="submitBnt"type="submit" onClick={handleSubmit}>Create</button>
                </section>              
            </div>
            <Link to="/log" className="enter-app">
                <FiArrowRightCircle size="2rem" color="rgb(255,255,255)" />
            </Link>
        </div>
    )
}
