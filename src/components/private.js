import React from 'react'
import isAuthenticated from '../services/auth'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute =({component: Component, ...rest})=>(
    <Route {...rest} render={props=>
        localStorage.getItem("token") ?(
            <Component {...props}/>
        ):(
            <Redirect to={{pathName: '/log', state: {from: props.location}}}/>
        )
    } />
    )
    
