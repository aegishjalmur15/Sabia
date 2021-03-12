import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.css'
import "../styles/regisAndLogin.css"
import logo from '../assets/logo.png'
import Register from '../components/register.js';

function Landing() {
    
    return (
        <main>
            <div className="leftSideWrapper">
                <div className="logo-container">
                <img className="logo" src={logo} alt="logo sabiá"/>
                </div>
                <div className="explainContainer">
                    <h1 className="explainHeader">Sobre o projeto</h1>
                    <p className="explainContent">Este projeto é uma cópia simples do Twitter para estudo pessoal.
                    Aqui pude treinar e aprender implementações modernas de tecnologias muito usadas como: ORMs, Typescript
                    Express, NodeJs, Bcrypt, React... e outras.
                    Você pode efetuar seu cadastro e testar sem nenhum compromisso, isto é apenas para estudo e desenvolvimento pessoal.
                    Muito obrigado :)</p>
                </div> 
            </div>
            <div className="rigthSideWrapper">
                <Register />
            </div>
        </main>
    )
}

export default Landing