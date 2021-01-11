import React, { useState, useEffect } from 'react';
import globalContext from './globalContext';

export default function AppContext(props) {
    const [notif, setNotif] = useState(null)
    useEffect(()=>{
       if(localStorage.getItem("panier")){
        setNotif(1)
       }
       else {
        setNotif(0)
       } 
    },[])
    return (
        <globalContext.Provider value={{
            notif: notif,
            setNotif:setNotif
        }}>
            {props.children}
        </globalContext.Provider>
    )
    }