import React from 'react';
import Coat from '@/Components/Coat';
import Styles from './page.module.css';
import Link from 'next/link';
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
          'School A',
          'School B',
          'School C',
          'School D',
        ];

  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.formContainer}>
            <SchoolForm regions={regions} schools={schools}/>
        </div>
          
       
        <div className={Styles.coatContainer}>
          <Coat />
        </div>
      </div>
    </div>
  );
};

export default Page;
