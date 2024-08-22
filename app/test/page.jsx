'use client';
import { useState, useEffect } from "react";

const Test = () => {

    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState(1);

    // Load data from local storage when component mounts
    useEffect(() => {
        const savedData = localStorage.getItem('myData');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    // Save data to local storage whenever data changes
    useEffect(() => {
        if (data.length > 0) {
          localStorage.setItem('myData', JSON.stringify(data));
        }
    }, [data]); // Runs whenever `data` changes

    const addData = () => {
        const existingItemIndex = data.findIndex(item => item.title === title);
        
        if (existingItemIndex !== -1) {
            // Update existing item
            const updatedData = [...data];
            updatedData[existingItemIndex].quantity = quantity;
            setData(updatedData);
        } else {
            // Add new item
            setData(prevData => [...prevData, { id: Date.now(), title: title, quantity: quantity }]);
        }
    };

    // Handle quantity change
    const handleQuantityChange = (e) => {
        const newQuantity = Number(e.target.value);
        setQuantity(newQuantity);

        // Update the item in the data array
        setData(prevData => {
            const updatedData = prevData.map(item => 
                item.title === title ? { ...item, quantity: newQuantity } : item
            );
            return updatedData;
        });
    };

    useEffect(() => {
        if(title) {
            // Update the item in the data array
            const newQuantity = Number(e.target.value);
            setQuantity(newQuantity);
            setData(prevData => {
                const updatedData = prevData.map(item => 
                    item.title === title ? { ...item, quantity: newQuantity } : item
                );
                return updatedData;
            });
        }
    },quantity);

    return (
        <div className="mt-60">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2" />
            <input type="number" value={quantity} onChange={handleQuantityChange} className="border-2" />
            <button onClick={addData}>Add Item</button>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title} x {item.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default Test