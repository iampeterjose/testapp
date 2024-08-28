"use client";
import { useState } from "react";
import Paypal from "../../components/Paypal";

const Test = () => {
    const [checkOut, setCheckOut] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <div className="mt-40">
                    <button onClick={() => setCheckOut(true)}>
                        Check Out
                    </button>
                    {checkOut && <Paypal />}
                </div>
            </main>
        </div>
    )
}

export default Test