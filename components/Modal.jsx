"use client";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

const Modal = ({ isOpen, onClose, title, image, description, id, price }) => {
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();

    const handleAdd = () => {
        addItem({ id, title, price, quantity: parseInt(quantity, 10), image });
        onClose();
    };
    
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-6 rounded-md shadow-lg w-4/5 lg:w-2/5 h-150">
                {/* Close button */}
                <button
                onClick={onClose}
                className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                >
                &times;
                </button>
                {/* Modal content */}
                <div className="flex">
                    <img src={image} alt={title} className="w-48 h-48 rounded-lg mb-4" />
                    <div className="flex flex-col justify-end items-end mb-4 pl-2">
                        <label>
                            Quantity: 
                            <input 
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="w-[50px] pl-2 ml-2 py-1 border-2 border-gray-700 rounded-md"
                            />
                        </label>
                        <button 
                            className="px-6 py-2 mt-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 w-full"
                            onClick={handleAdd}
                        >
                            Add
                        </button>
                    </div>
                </div>
                <h2 className="mt-2 text-xl leading-normal font-semibold font-palanquin">{title}</h2>
                <p className="mt-2 font-semibold font-montserrat text-orange-700 text-lg leading-normal">${price}</p>
                <p className="mt-4 font-montserrat">{description}</p>
            </div>
        </div>
    )
}

export default Modal