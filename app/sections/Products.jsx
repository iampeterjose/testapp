"use client";
import CoffeeCard from "@/components/CoffeeCard";
import { useEffect, useState } from "react";

const Products = () => {
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className='max-w-[1440px] mx-0 my-auto max-sm:mt-5'>
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-2xl font-palanquin font-bold">Our <span className="text-coffee">Coffee </span>Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-800">Experience high-quality coffees</p>
      </div>
      <div className="mt-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {coffeeData.map((coffee) => (
          <CoffeeCard 
            key={coffee.id} 
            title={coffee.title}
            image={coffee.image}
            description={coffee.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Products