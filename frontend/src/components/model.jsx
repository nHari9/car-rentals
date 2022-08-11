import React from 'react'
import {Button, TextField} from "@material-ui/core"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "./styled";

const Model=()=>{
    const [model, setModel] = useState();

  const getModels = () => {
    axios.get("http://127.0.0.1:3456/model").then((res) => {
        setModel(res.data.Vmodel);
      console.log(model);
    });
  };
  useEffect(() => {
    getModels();
  }, []);
    return(
        <div>
            <h1>model</h1>
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
           
            <Link to="/date"><Button variant='contained' onClick={()=>{}} color="primary" >Next</Button></Link>

        </div>
    )
}
export default Model;