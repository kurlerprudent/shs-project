"use client"
import { useState } from "react";
import styles from './RegistrationFrom.module.css'
import { Alert, Button } from "@mui/material";
import { green } from "@mui/material/colors";
const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    parentName: "",
    dateOfBirth: "",
    parentOccupation: "",
    address: "",
    phoneNumber: "",
    email: "",
    previousSchool: ""
  });
  const [alertVisible, setAlertVisible] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000); 
  };

  return (
    <div>
      {alertVisible && <Alert severity="success" sx={{position:'absolute',bottom:0,width:'40%'}}>Form Submitted successfully</Alert>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" name="name" value={form.name} onChange={handleChange} />
        <input placeholder="Parent/Guardian Name" type="text" name="parentName" value={form.parentName} onChange={handleChange} />
        <input placeholder="Date of Birth" type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} />
        <input placeholder="Parent/Guardian Occupation" type="text" name="parentOccupation" value={form.parentOccupation} onChange={handleChange} />
        <input placeholder="Address" type="text" name="address" value={form.address} onChange={handleChange} />
        <input placeholder="Phone Number" type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
        <input placeholder="Email" type="email" name="email" value={form.email} onChange={handleChange} />
        <button style={{height:35,marginTop:8,color:'white',backgroundColor:green[400],border:0,fontSize:20,fontWeight:'700'}} className={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
};


export default RegistrationForm;
