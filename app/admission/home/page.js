import React from 'react';
import Styles from './page.module.css';
import YellowButtons from '@/Components/YellowButtons';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import Link from 'next/link';
import    ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';   
import { green } from '@mui/material/colors';

const CongratsText = () => {
  return (
    <div className={Styles.congratsText}>
      <h2>Congratulations, name</h2>
      <p>
        The Senior High School Administration Web Application is developed to streamline administrative processes in schools, simplify admission procedures, and integrate ICT skills into students' daily lives. This web-based platform reduces physical presence requirements, allowing students and parents to access critical services remotely. Designed with the aim of preventing long queues, minimizing travel, and promoting ease of access, this system serves as a digital hub for students, parents, and school administrators.
      </p>
    </div>
  );
};

const FirstButtons = () => {
  return (
    <div className={Styles.redButtons}>
      <Link href="/admission">
        <Button variant="outlined" startIcon={<ArrowBackIcon sx={{ fontSize: 20 }}  />} sx={{color:'white',bgcolor:green[400]}}>
          Back
        </Button>
      </Link>

      <Link href="/admission/home/registration">
        <Button variant="outlined" endIcon={<ArrowForwardIcon sx={{ fontSize: 20 }} />} sx={{color:'white',bgcolor:green[400]}}>
          Continue
        </Button>
      </Link>
    </div>
  );
};

const RightSideButtons = () => {
  return (
    <div className={Styles.rightSideButtons}>
      <YellowButtons icon={<HomeIcon sx={{ fontSize: 24 }} />} link="/" title="Tour School" />
      <YellowButtons icon={<CallIcon sx={{ fontSize: 24 }} />} link="/" title="Contact School" />
    </div>
  );
};

const Page = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.congratsTextAndButtons}>
        <CongratsText />
        <FirstButtons />
        </div>
    
      <RightSideButtons />
    </div>
  );
};

export default Page;