"use client";
import Modal from "./Modal";
import { useState } from "react";

const CoffeeCard = ({title, image, description, id}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
        <div 
            className="flex flex-1 justify-center items-center flex-col w-full mb-6 max-sm:w-full hover:cursor-pointer group hover:shadow-xl transition-shadow hover:bg-slate-100 duration-500"
            onClick={openModal}
        >
            <img 
                src={image} 
                alt={title} 
                className="w-[280px] h-[280px] rounded-lg"
            />
            <div className="w-80 px-6">
                <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">{title}</h3>
                <p className="mt-2 font-semibold font-montserrat text-orange-700 text-lg leading-normal">$2.99</p>
            </div>
        </div>
        <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={title}
            image={image}
            description={description}
            id={id}
            price={2.99}
        />
        </>
    )
}

export default CoffeeCard