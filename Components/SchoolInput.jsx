"use client"

import React, { useState } from 'react';
import styles from './ScoolInput.module.css'
import CustomSelect from './CustomDropDown'
import RedButton from './RedButton';
import Link from 'next/link';
import { Button } from '@mui/material';

const SchoolForm = ({ regions, schools }) => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('');
  const [indexNumber, setIndexNumber] = useState('');

  return (
    <div className={styles.container}>

      <CustomSelect
        options={regions}
        selected={selectedRegion}
        onChange={setSelectedRegion}
        placeholder='Select the region of your school'
      />


      <CustomSelect
        options={schools}
        selected={selectedSchool}
        onChange={setSelectedSchool}
        placeholder='Selct the name of your school'
      />

      
      <input
        type="text"
        value={indexNumber}
        onChange={(e) => setIndexNumber(e.target.value)}
        placeholder="Enter your index number"
        className={styles.input}
      />
    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
    <Link href='/admission/home'>
           <Button variant="contained" sx={{width:{md:300,xs:260}}}>
        Submit
      </Button>
      </Link>
    </div>

    </div>
  );
};

export default SchoolForm;
