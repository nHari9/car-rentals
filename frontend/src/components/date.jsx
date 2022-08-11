import React from 'react'
import {Button, TextField} from "@material-ui/core"
import { Link } from "react-router-dom";

const Date=()=>{

    return(
        <div>
            <h1>Date picker</h1>
       

        <Link to="/data"><Button variant='contained' onClick={()=>{}} color="primary" >Submit</Button></Link>

        
        </div>
    )
}
export default Date;