"use client";
import PopularProductsCard from "@/components/PopularProductsCard";
import { useEffect, useState } from "react";

const PopularProducts = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoffeeData = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot');

        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCoffeeData(data);
      } catch (error) {
          setError(error.message);
      } finally {
          setIsLoading(false);
      }
    };

    fetchCoffeeData();
  },[]);

  const limitedCoffeeData = coffeeData.slice(0,4);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section id='products' className='max-sm:mt-5 p-5 md:p-20'>
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-2xl font-palanquin font-bold">Best Seller</h2>
      </div>
      <div className="mt-8 grid lg:grid-cols-4 grid-cols-2 sm:gap-4 gap-10">
        {limitedCoffeeData.map((coffee) => (
          <PopularProductsCard 
            key={coffee.id} 
            title={coffee.title}
            image={coffee.image}
            description={coffee.description}
            price={2.99}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts