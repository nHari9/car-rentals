import React from 'react'
import {Button, TextField} from "@material-ui/core"
import { Link } from "react-router-dom";

const Type=()=>{
    return(
        <div>
            <h1>vehicle</h1>
            {/* onChange={(e)=>setUserData({...userData,"firstname":e.target.value})} */}
            <Link to="/model"><Button variant='contained' onClick={()=>{}} color="primary" >Next</Button></Link>

        </div>
    )
}
export default Type;