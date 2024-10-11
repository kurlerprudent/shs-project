"use client"
import { useState } from "react";
import styles from './RegistrationFrom.module.css'
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted!");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
    
      

     
        <input placeholder="Name" type="text" name="name" value={form.name} onChange={handleChange} />
      
    
        
        <input placeholder="Parent/Guardian Name" type="text" name="parentName" value={form.parentName} onChange={handleChange} />
      
    
       
        <input placeholder=" Date of Birth" type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} />
      
    
        
        <input placeholder="Parent/Guardian Occupation" type="text" name="parentOccupation" value={form.parentOccupation} onChange={handleChange} />
      
    
        
        <input placeholder="Address" type="text" name="address" value={form.address} onChange={handleChange} />
      
    
       
        <input placeholder=" Phone Number" type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
      
    
       
        <input placeholder=" Email" type="email" name="email" value={form.email} onChange={handleChange} />
       
      
      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
