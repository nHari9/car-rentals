import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "./styled";

const Type = () => {
  const [info, setInfo] = useState();

  const getTypes = () => {
    axios.get("http://127.0.0.1:3456/type").then((res) => {
      setInfo(res.data.emps);
      console.log(info);
    });
  };
  useEffect(() => {
    getTypes();
  }, []);

  return (
    <div>
      <h1>vehicle</h1>

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

      <Link to="/model">
        <Button variant="contained" onClick={() => {}} color="primary">
          Next
        </Button>
      </Link>
    </div>
  );
};
export default Type;
