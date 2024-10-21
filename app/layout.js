"use client";

import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/Components/NavBar";
import { usePathname } from 'next/navigation';
import { AppProvider } from "@toolpad/core";
import { AddAPhotoOutlined, Analytics, Dashboard, Logout, Settings, ViewAgenda } from "@mui/icons-material";
import theme from '@/theme';
import { ThemeProvider } from "@mui/material";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const NAVIGATION = [
  {
    kind:'home',
    Segment:'auth/dashboard',
    title: "Home",
    icon: <Dashboard/>
  },
  {segment:'dashboard/add_student', title: "Add Student" , icon:<AddAPhotoOutlined/>},

  {segment:'dashboard/view_students', title: "View Students",icon:<ViewAgenda/>},

  {segment:'dashboard/analytics', title: "Analytics", icon:<Analytics/>},
  {segment:'dashboard/settings', title: "Settings", icon:<Settings/>},
  {segment:'dashboard/logout', title: "Logout", icon:<Logout/>}
    

];

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showNavBar = !pathname.includes('/auth' || 'dashboard'); // Check if the pathname includes 'auth'

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme}>
        <AppProvider theme={theme} branding={{title:'SHS WEB'}} navigation={NAVIGATION}>
        {showNavBar && <NavBar />}
        {children}
        </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
