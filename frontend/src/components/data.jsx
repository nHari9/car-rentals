import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "./styled";

 const Data=()=>{
       
  const [users, setUsers]=useState()



  const getUsers = () => {
    axios.get("http://127.0.0.1:3456/data")
    .then((res) => {
       setUsers(res.data.Udata)
//       console.log(data)
    })
  }
  useEffect(() => {
       getUsers()
  },[])
  
    return(
           <div>
            <h1>DATA</h1>
            <Cards className="list_container">
        {/* {info.map((e) => (
          <div className="vehicle_card" key={e.id}>
            <img
              className="vehicle_image"
              src={e.image}
              width="90%"
              height="75%"
            />
            <span className="vehicle_name">{e.vehicle_name}</span>
            <br />
            
          </div>
        ))} */}
      </Cards>
           </div>   
    )
    };

export default Data;


