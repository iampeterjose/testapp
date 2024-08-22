"use client";
import { navLinks } from "@/app/constants";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getTotalQuantity } = useCart();
    console.log(getTotalQuantity());
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-slate-50 py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-satoshi text-gray-800">
                    <a href="/" className="flex justify-center items-center text-xl font-semibold pr-80">
                        <img src="/assets/icons/coffeecup.png" alt="Logo" width={50} height={50} /> TestApp
                    </a>
                </div>

                <div onClick={toggleMenu} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <img src="/assets/icons/hamburger.png" alt="Hamburger" width={25} height={25} />
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-slate-50 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isMenuOpen ? 'top-28 shadow-lg':'top-[-490px]'} md:shadow-none`}>
                    {navLinks.map((link) => (
                        <li key={link.label} className="md:ml-8 text-lg md:my-0 my-5">
                            <a href={link.href} className="text-gray-800 duration-200 hover:text-coffee">{link.label}</a>
                        </li>
                    ))}
                    <button className="bg-orange-600 text-white h-10 w-24 rounded-full md:ml-8 text-lg md:my-0 my-5">
                        Sign In
                    </button>
                </ul>
            </div>
            <div className="bg-slate-50 py-2 px-12 flex justify-end items-end">
                {getTotalQuantity() > 0 ? (
                    <p className="bg-red-600 text-white pl-2 rounded-full">{getTotalQuantity()} &nbsp;</p>
                ) : (
                    ''
                )}
                <a href="/cart">
                    <img src="/assets/icons/cart.png" alt="Cart" width={25} height={25}/>
                </a>
            </div>
        </div>
    );
};

export default Nav;
