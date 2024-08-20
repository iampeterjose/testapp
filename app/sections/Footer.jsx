import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const Footer = () => {
  return (
    <footer id='contact-us' className="max-w-[1440px] mx-0 my-auto">
      <div className="flex justify-between items-start gap-20 flex-wrap mx-lg:flex-col border-b-2 pb-20">
        <div className="flex flex-col items-start">
          <a href="/"
            className="flex justify-center items-center text-2xl font-satoshi font-semibold pr-80 text-slate-100"
          >
            <img 
            src="/assets/icons/coffeecup.png" 
            alt="Logo"
            width='40' 
            height='40' 
            />
            TestApp
          </a>
          
          <ContactUs />
          <AboutUs />
        </div>
      </div>
      <p className="font-satoshi text-slate-100 text-sm mt-10">Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer