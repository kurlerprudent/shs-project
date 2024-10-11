"use client"

import React, { useState } from 'react';
import styles from './ScoolInput.module.css'
import CustomSelect from './CustomDropDown'
import RedButton from './RedButton';

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

        <RedButton title='Submit' link='/admission/home'/>
    </div>
  );
};

export default SchoolForm;
