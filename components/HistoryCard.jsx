import React from 'react';

const HistoryCard = ({ data, index }) => {

    return (
        <div className='flex flex-col w-full my-2'>
            <ul className='hover:bg-slate-50 hover:shadow-lg py-2'>
                {data.orders.map((item) => (
                    <>
                    <li key={index}>
                        <p key={item.id} className='text-md'>{item.title} x {item.quantity}</p>
                    </li>
                    </>
                ))}
                <p className='text-sm text-slate-500'>
                    {new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </p>
            </ul>
        </div>
    )
}

export default HistoryCard