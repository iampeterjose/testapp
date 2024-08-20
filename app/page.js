import Nav from "@/components/Nav";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Products from "./sections/Products";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="p-5 md:p-20">
          <Hero />
        </section>
        <section className="p-5 md:p-20">
          <PopularProducts />
        </section>
        <section className="p-5 md:p-20">
          <Products />
        </section>
      </main>
      <footer className="bg-gradient-to-r from-coffee to-coffee-1 text-slate-900 p-5 md:p-20">
        <Footer />
      </footer>
    </div>
  );
}
