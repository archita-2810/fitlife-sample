"use client";
import React, { useState } from 'react';
import {Menu, X} from "lucide-react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
        <nav className="flex justify-between items-center text-white p-8">
            <p className="text-3xl">Fit-Life</p>
            <div className="hidden md:flex gap-8 justify-center items-center">
                <a href="#home">Home</a>
                {/* <div className='md:hidden flex justify-center'>
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div> */}
                <a href="#profile">Profile</a>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Login</button>
                <button className="text-white bg-transparent border border-white hover:bg-white hover:text-black transition-colors duration-300 px-4 py-2 rounded">Signup</button>
            </div>
            <div className='md:hidden flex items-center'>
                <button onClick={toggleNavbar}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
        {isOpen && (
            <div className='flex flex-col items-center text-white md:hidden'>
                <a href="#home" className='cursor-pointer p-4 hover:underline'>Home</a>
                <a href="#profile" className='cursor-pointer p-4 hover:underline'>Profile</a>
                <button className="bg-white text-black px-4 py-2 my-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Login</button>
                <button className="text-white bg-transparent border border-white hover:bg-white hover:text-black transition-colors duration-300 px-4 py-2 rounded">Signup</button>
            </div>
        )}
        </>
    );
}