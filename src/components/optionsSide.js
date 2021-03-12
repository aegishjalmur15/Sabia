import React from 'react';
import '../styles/optionsSide.css'
import logo from '../assets/logo.png'
import { GoEye, GoHome, GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';
export default function OptionSide(props){

    return(
        <div className="optionsWrapper">
            <div className="content">
                <div className="logoOp">
                    <img className="logoImg" src={logo} alt="logo"/>
                </div>
                <div className="options">
                    <Link to="/main" className="op-nav-bar">
                        <GoHome size="2rem" color="rgb(255,255,255)" />
                        <h4>Home</h4>
                    </Link>
                    <Link to="#" className="op-nav-bar">
                        <GoEye size="2rem" color="rgb(255,255,255)" />
                        <h4>Explore</h4>
                    </Link>
                    <Link to="#" className="op-nav-bar">
                        <GoPerson size="2rem" color="rgb(255,255,255)" />
                        <h4>Profile</h4>
                    </Link>
                </div>
                <div className="footer">
                    <img className="profileImg" src={props.profileImage} alt="profile image"/>
                    <h5 className="userName">{props.name}</h5>
                </div>
            </div>
        </div>
    )
}