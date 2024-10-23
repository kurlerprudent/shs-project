"use client";

import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="min-h-screen text-white bg-[#002b5b] flex items-center justify-center">
      {/* Hero Section */}
      <header className="flex flex-col items-center text-center">
        <h1 className="text-9xl font-extrabold text-yellow-500 drop-shadow-lg">
          SHS WEB
        </h1>
        <p className="mt-12 text-3xl max-w-3xl leading-relaxed">
          The application is structured into various modules to cater to the
          needs of students, administrators, and parents.<br/>
          Click on the button below to begin your admission process.
        </p>

        {/* Get Started Button */}
        <div className="mt-16">
          <Link href="/student">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-2xl hover:opacity-90">
              Get started
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
