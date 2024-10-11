"use client";

import { useRouter } from 'next/navigation';
import Styles from './NavBar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const NavBar = () => {
    const router = useRouter();

    return (
        <div className={Styles.container}>
           
            <div className={Styles.logoName}>
                <h1>SHS WEB</h1>
            </div>
            <div className={Styles.navLinks}></div>
            <div>
                <ul className={Styles.links}>
                    <Link href="/">
                        <li className={`${Styles.link} ${router.pathname === '/' ? Styles.active : ''}`}>Home</li>
                    </Link>
                    <Link href="/admission">
                        <li className={`${Styles.link} ${router.pathname === '/admission' ? Styles.active : ''}`}>Admission page</li>
                    </Link>
                    <Link href="/students">
                        <li className={`${Styles.link} ${router.pathname === '/students' ? Styles.active : ''}`}>Student page</li>
                    </Link>
                    <Link href="/news">
                        <li className={`${Styles.link} ${router.pathname === '/news' ? Styles.active : ''}`}>News & Activities</li>
                    </Link>
                </ul>
            </div>
            <div className={Styles.menuIcon}>
                <MenuIcon sx={{ fontSize: 35 ,':hover':{cursor:'pointer'}}} />
            </div>
        </div>
    );
};

export default NavBar;
