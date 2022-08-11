import {Button, TextField} from "@material-ui/core"
import { Link } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Date=()=>{
    const [date, setDate]=useState()



  const getDates = () => {
    axios.get("http://127.0.0.1:3456/data")
    .then((res) => {
        setDate(res.data.dates)
//       console.log(data)
    })
  }
  useEffect(() => {
    getDates()
  },[])

    return(
        <div>
            <h1>Date picker</h1>

       {/* check if dates are matching in the data base */}

        <Link to="/data"><Button variant='contained' onClick={()=>{}} color="primary" >Submit</Button></Link>

        {/* send an alert if available */}
        </div>
    )
}
export default Date;