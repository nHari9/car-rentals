import React from 'react'
import {Button, TextField} from "@material-ui/core"
import { Link } from "react-router-dom";
import { useState } from 'react';

const Name=()=>{
    const [userData, setUserData]= useState({
        firstname:"",
        lastname:"",
        wheels:"",
        type:"",
        model:"",
        date:""
    });

    function handlesubmit(event){
        // setUserData(data=>[...data,userData])
        // console.log(userData)
    }
    return(
        <div>
            <h1>What's your name!?</h1>
            <TextField label="First name" margin="normal" variant='outlined' color="secondary" 
            onChange={(e)=>setUserData({...userData,"firstname":e.target.value})}/>
            <TextField label="Last name" margin="normal" variant='outlined' color="secondary"
            onChange={(e)=>setUserData({...userData,"lastname":e.target.value})}/><br />
            <Link to="/wheels"><Button variant='contained' onClick={handlesubmit} color="primary" >Next</Button></Link>
        </div>  
    )  
}
export default Name;