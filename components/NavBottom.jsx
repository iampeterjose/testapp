"use client";
import { useCart } from "../app/context/CartContext";
import Link from "next/link";

const NavBottom = () => {
    const { getTotalQuantity, isUserLoggedIn } = useCart();

    return (
        <div>
        {isUserLoggedIn() && getTotalQuantity() &&
        <div className="hidden md:block fixed bottom-5 right-5 z-50 w-80 h-22 p-2 bg-orange-600 rounded-lg text-slate-50 shadow-xl shadow-orange-700">
            <p>Hey, Good day!</p>
            <p>Items on cart: {getTotalQuantity()}</p>
            <Link href='/cart'>
                <p className="text-sm">Check my cart</p>
            </Link>
        </div>
        }
        {isUserLoggedIn() && 
        // Mobile screen
        <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 b-slate-50 border-t-2 border-gray-200 bg-slate-50 shadow-inner">
            <div className="grid h-full max-w-full grid-cols-3 mx-auto">
                <Link href='/' className="inline-flex flex-col items-center justify-center px-2 border-gray-200 border-x hover:bg-gray-200">
                    <span className="flex items-center">
                        <img src="/assets/icons/home.svg" alt="Home" width={25} height={25} />
                    </span>
                    <span className="ml-2">Home</span>
                </Link>
                <Link href='/cart'className="inline-flex flex-col items-center justify-center px-2 border-gray-200 border-x hover:bg-gray-200">
                    <span className="flex items-center">
                        {getTotalQuantity() > 0 ? (
                            <span className="bg-red-600 text-white pl-2 rounded-full">{getTotalQuantity()} &nbsp;</span>
                        ) : (
                            ''
                        )}  
                            <img src="/assets/icons/cart.png" alt="Cart" width={25} height={25} />
                        </span>
                    <span className="ml-2">Cart</span>
                </Link>
                <p className="inline-flex flex-col items-center justify-center px-2 border-gray-200 border-x hover:bg-gray-200">
                    <span className="flex items-center">
                        <img src="/assets/icons/profile.svg" alt="Profile" width={25} height={25} />
                    </span>
                    <span className="ml-2">Profile</span>
                </p>
            </div>
        </div>
        }
        </div>
    )
}

export default NavBottom