"use client";

import React, { useEffect, useRef } from 'react';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.css'; 
import styles from './CustomDropDown.module.css'; 

const CustomSelect = ({ options, selected, onChange, placeholder }) => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const choices = new Choices(selectRef.current, {
        searchEnabled: true,
        removeItemButton: true,
      });

      return () => {
        choices.destroy();
      };
    }
  }, []);

  return (
    <select
      ref={selectRef}
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className={styles.customSelect}
    >
      <option value="" disabled className={styles.placeholderText}>{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
