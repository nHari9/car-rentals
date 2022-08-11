import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import  RadioGroup  from "@mui/material/RadioGroup";
import Radio from '@mui/material/Radio';
import {FormControl} from "@material-ui/core";
import {FormControlLabel} from "@material-ui/core";
import { FormLabel } from "@mui/material";

const Wheels = () => {
    const [wheel, setWheel] = useState("")

    const handleChange=(event)=>{
        setWheel(event.target.value)
    }
    
  return (
    <div>
      <h1>wheels</h1>

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={handleChange}
          value={wheel}
        >
          <FormControlLabel value="twowheeler" control={<Radio />} label="Two wheeler" />
          <FormControlLabel value="fourwheeler" control={<Radio />} label="Four wheeler" />
        </RadioGroup>
      </FormControl>
      
      <Link to="/type">
        <Button variant="contained" onClick={() => {console.log(wheel)}} color="primary">
          Next
        </Button>
      </Link>

    </div>
  );
};
export default Wheels;
