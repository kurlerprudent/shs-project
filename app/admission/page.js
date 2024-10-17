/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Styles from './page.module.css';
import SchoolForm from '@/Components/SchoolInput';

const Page = () => {
  const regions = [
    'Greater Accra',
    'Ashanti',
    'Western',
    'Eastern',
    'Northern',
  ];

  const schools = [
    "Presec",
    "Achimota",
    "Adisdel",
    "WASS",
    "Pesco",
    "Aggrey"
  ];

  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.formContainer}>
          <SchoolForm regions={regions} schools={schools} />
        </div>
      
      </div>
    </div>
  );
};

export default Page;
