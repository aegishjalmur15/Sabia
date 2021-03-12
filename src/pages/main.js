import React, {useEffect, useState} from 'react'
import api from '../services/API'
import OptionSide from '../components/optionsSide'
import Home from '../components/home'
import {header, bodyParameters} from '../services/auth'
import '../styles/main.css'
export default function Main(){
    const [data,setData] = useState({
        name: "none",
        userImage:{
            userImageUrl:""
        }
    })
    useEffect(()=>api.post("main", bodyParameters,header).then(res=>{
        setData(res.data)
    }).catch(err=>alert(err))
    )
    return(
        <main>
                <OptionSide name={data.name} profileImage={data.userImage.userImageUrl}/>
                <Home profileImage={data.userImage.userImageUrl} id={data.id}/>
        </main>
       
        )
}
