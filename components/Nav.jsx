"use client";
import Link from "next/link";
import { navLinks } from "../app/constants";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { useCart } from "../app/context/CartContext";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [providers, setProviders] = useState();
    const { isUserLoggedIn } = useCart();
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
        }

        setProviders();
    }, []);

    return (
        <div className="shadow-md w-full fixed -top-10 left-0">
            <div className="md:flex items-center justify-between bg-slate-50 py-4 md:px-10 px-7 pt-20">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-satoshi text-gray-800 w-[150px]">
                    <a href="/" className="flex justify-center items-center text-xl font-semibold pr-80">
                        <img src="/assets/icons/coffeecup.png" alt="Logo" width={50} height={50} /> 
                        <p className="text-2xl">TestApp</p>
                    </a>
                </div>

                <div onClick={toggleMenu} className="text-3xl absolute right-8 top-20 pt-5 cursor-pointer md:hidden">
                    <img src="/assets/icons/hamburger.png" alt="Hamburger" width={25} height={25} />
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-slate-50 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isMenuOpen ? 'top-20 shadow-lg':'top-[-490px]'} md:shadow-none`}>
                    {navLinks.map((link) => (
                        <li key={link.label} className="flex flex-row md:ml-8 text-lg md:my-0 my-5">
                            <a href={link.href} className="text-gray-800 duration-200 hover:text-coffee">{link.label}</a>
                        </li>
                    ))}
                    {isUserLoggedIn() ? (
                        <>
                        <button 
                            type="button" 
                            className="border-2 border-slate-600 text-slate-600 h-10 w-[96px] rounded-full md:ml-8 text-lg md:my-0 my-5 hover:bg-slate-600 hover:text-slate-50" 
                            onClick={signOut}
                        >
                            Sign Out
                        </button>
                        <Link href='/profile'>
                            <img src="/assets/icons/profile.svg" alt="NavProfile" width={40} height={40} className="hidden md:flex ml-2 p-1 border-2 rounded-full"/>
                        </Link>
                        </>
                    ) : (
                        <>
                            {providers && 
                                Object.values((providers).map((provider) => (
                                    <button 
                                        type="button"
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                        className="border-2 bg-orange-600 text-slate-50 h-10 w-[96px] rounded-full md:ml-8 text-lg md:my-0 my-5 hover:border-orange-600 hover:text-orange-600"
                                    >
                                        Sign In
                                    </button>
                                )))
                            }
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Nav;
