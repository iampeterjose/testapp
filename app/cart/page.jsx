"use client";
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, handleClearCart, updateQuantity } = useCart();
  const [isQuantity, setIsQuantity] = useState(0);

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => {
    const itemTotal = item.price * item.quantity;

    //Accumulate the total
    return total + itemTotal;
  }, 0);
  console.log(totalAmount);

  let vat = (totalAmount * .10).toFixed(2);

  // Handle quantity change
  const handleQuantityChange = (id, e) => {
    const newQuantity = Number(e.target.value);
    updateQuantity(id, newQuantity); // Update quantity in context with confirmation
};
  

  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-grow'>
        <div className='flex flex-col md:flex-row p-5 md:p-20 mt-32 md:mt-20 '>
        <div className='w-full' >
          <h1 className='text-2xl'>Cart</h1>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className='my-4 border-b-2 border-b-slate-200'>
                  <div className='flex flex-row'>
                    <input type="number" 
                      value={item.quantity}
                      className='w-12 h-8 border-2 text-base border-gray-400 rounded-md my-8 mr-2 pl-2'
                      onChange={(e) => handleQuantityChange(item.id, e)}
                    />
                    
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-[100px] h-[100px] rounded-lg"
                    />
                  </div>
                  <h3 className="mt-2 text-md leading-normal">{item.title}</h3>
                  <p className="text-sm leading-normal">${(item.price * item.quantity).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No items in the cart</p>
          )}
          {cartItems.length > 0 && 
            <button
              onClick={handleClearCart}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              Clear Cart
            </button>
          }
        </div>
        {cartItems.length > 0 && 
          <div className='w-full mt-4 p-0 md:p-20'>
            <h2 className='text-lg'>Order Summary</h2>
              <table className='table-auto w-full mt-4'>
                <thead className='text-left text-md'>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody className='text-sm'>
                  {cartItems.map((cart) => (
                    <tr key={cart.id}>
                      <td>{cart.title}</td>
                      <td>${cart.price}</td>
                      <td>{cart.quantity}</td>
                      <td>${(cart.price * cart.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr className='border-t-2 border-solid'>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td>${totalAmount.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Vat 10%</td>
                    <td></td>
                    <td></td>
                    <td>${vat}</td>
                  </tr>
                  <tr>
                    <td>Total Amount</td>
                    <td></td>
                    <td></td>
                    <td>${(totalAmount - vat).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
          </div>
        }
        </div>
      </main>
    </div>
  )
}

export default Cart