"use client";
import CoffeeCard from "@/components/CoffeeCard";
import { useEffect, useState } from "react";

const Products = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSetSearchQuery] = useState('');
  const [filteredCoffeeData, setFilteredCoffeeData] = useState([]);

  useEffect(() => {
    const fetchCoffeeData = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot');

        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCoffeeData(data);
        setFilteredCoffeeData(data);
      } catch (error) {
          setError(error.message);
      } finally {
          setIsLoading(false);
      }
    };

    fetchCoffeeData();
  },[]);

  useEffect(() => {
    // Filter coffee data based on the search query
    const lowercasedQuery = searchQuery.toLowerCase();
    const filteredData = coffeeData.filter(coffee =>
      coffee.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredCoffeeData(filteredData);
  }, [searchQuery, coffeeData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className='max-sm:mt-5 p-5 md:p-20'>
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-2xl font-palanquin font-bold">Our <span className="text-coffee">Coffee </span>Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-800">Experience high-quality coffees</p>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <img src="/assets/icons/search.svg" alt="Search" className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
          <input 
            type="search" 
            className="block w-full md:w-[50%] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Search coffee..."
            value={searchQuery}
            onChange={(e) => setSetSearchQuery(e.target.value)}
            />
        </div>
      </div>
      <div className="mt-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {filteredCoffeeData.map((coffee) => (
          <CoffeeCard 
            key={coffee.id} 
            title={coffee.title}
            image={coffee.image}
            description={coffee.description}
            price={2.99}
            id={coffee.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Products