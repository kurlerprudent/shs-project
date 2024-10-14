"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './Navbar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import coat from '../Images/coat.jpg';

const NavBar = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggleOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleMenuToggleClose = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={Styles.container}>
      <Link href="/">
        <div className={Styles.logoName}>
          <Image src={coat} alt="SHS Logo" width={50} height={50} />
          <h1>SHS WEB</h1>
        </div>
      </Link>
      <div className={Styles.navLinks}>
        <ul className={Styles.links}>
          <li className={`${Styles.link} ${router.pathname === '/' ? Styles.active : ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${Styles.link} ${router.pathname === '/admission' ? Styles.active : ''}`}>
            <Link href="/admission">Admission page</Link>
          </li>
          <li className={`${Styles.link} ${router.pathname === '/students' ? Styles.active : ''}`}>
            <Link href="/students">Student page</Link>
          </li>
          <li className={`${Styles.link} ${router.pathname === '/news' ? Styles.active : ''}`}>
            <Link href="/news">News & Activities</Link>
          </li>
        </ul>
      </div>
      <div className={Styles.menuIcon} onClick={handleMenuToggleOpen}>
        <MenuIcon sx={{ fontSize: 35 }} />
      </div>
      <div className={`${Styles.mobileMenu} ${mobileMenuOpen ? Styles.open : ''}`}>
        <div className={Styles.closeMenu} onClick={handleMenuToggleClose}>
          &times;
        </div>
        <ul>
          <li onClick={handleMenuToggleClose} className={`${Styles.link} ${router.pathname === '/' ? Styles.active : ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleMenuToggleClose} className={`${Styles.link} ${router.pathname === '/admission' ? Styles.active : ''}`}>
            <Link href="/admission">Admission page</Link>
          </li>
          <li onClick={handleMenuToggleClose} className={`${Styles.link} ${router.pathname === '/students' ? Styles.active : ''}`}>
            <Link href="/students">Student page</Link>
          </li>
          <li onClick={handleMenuToggleClose} className={`${Styles.link} ${router.pathname === '/news' ? Styles.active : ''}`}>
            <Link href="/news">News & Activities</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;