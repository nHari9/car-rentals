import React from 'react'
import {Button, TextField} from "@material-ui/core"
import { Link } from "react-router-dom";

const Model=()=>{
    return(
        <div>
            <h1>model</h1>
           
            <Link to="/date"><Button variant='contained' onClick={()=>{}} color="primary" >Next</Button></Link>

        </div>
    )
}
export default Model;