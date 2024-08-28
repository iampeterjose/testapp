"use client";
import { useRef, useState, useEffect } from "react";

const Paypal = ({grandTotal}) => {
    const paypal = useRef();
    const [isPayPalReady, setIsPayPalReady] = useState(false);

    useEffect(() => {
        // Check if the PayPal script is already loaded
        if (window.paypal) {
            setIsPayPalReady(true);
        } else {
            // Listen for the PayPal script load event
            const handleScriptLoad = () => {
                setIsPayPalReady(true);
            };

            // Create and append the PayPal script
            const script = document.createElement("script");
            script.src = "https://sandbox.paypal.com/sdk/js?client-id=Aaem4_MW1kd-SNbooCSeGAJr19fnBNP8Cvh9WDg49GhEL9wjx8cFr-QPQfB4REZFhSVQmzXQ7i4mVbs7&currency=USD";
            script.async = true;
            script.onload = handleScriptLoad;
            script.onerror = () => console.error("Failed to load PayPal script");
            document.body.appendChild(script);

            // Cleanup on component unmount
            return () => {
                document.body.removeChild(script);
            };
        }
    }, []);


    useEffect(() => {
        if (isPayPalReady && window.paypal) {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                title: "My Coffee Order",
                                amount: {
                                    currency_code: "USD",
                                    value: grandTotal
                                }
                            }
                        ]
                    });
                },
                onApprove: async (data, actions) => {
                    try {
                        const order = await actions.order.capture();
                        console.log(order);
                    } catch (error) {
                        console.error("Error capturing the order:", error);
                    }
                },
                onError: (err) => {
                    console.error("PayPal Button Error:", err);
                }
            }).render(paypal.current);
        }
    }, [isPayPalReady]);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default Paypal