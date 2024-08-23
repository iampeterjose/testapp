"use client";
import CoffeeCard from "../../components/CoffeeCard";
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
    return <div className="p-5 md:p-20">Loading...</div>;
  }

  if (error) {
    return <div className="p-5 md:p-20">Error: {error}</div>;
  }

  return (
    <section className='max-sm:mt-5 p-5 md:p-20'>
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-2xl font-palanquin font-bold">Our <span className="text-coffee">Coffee </span>Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-800">Experience high-quality coffees</p>
        <div>
          <input 
            type="search" 
            className="block h-14 w-full md:w-[400px] px-3 py-2 sm:text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
            placeholder="Search coffee..."
            value={searchQuery}
            onChange={(e) => setSetSearchQuery(e.target.value)}
            />
        </div>
      </div>
      <div className="my-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 md:gap-14">
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