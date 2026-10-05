import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { MessageCircle, Sparkles } from "lucide-react";
import About from "../components/About";
import TopBar from "../components/TopBar";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";



import ToolsAndClients from "../components/ToolsAndClients";

import Footer from "../components/Footer";

import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Clients from "../components/Clients";

import DigitalAudit from "../components/DigitalAudit";


function Home() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 overflow-hidden">
      <TopBar/>
      <Navbar />

      <main>
        <Hero />
        <DigitalAudit/>
        <Clients/>
        <Services/>
         <About />
         <WhyChooseUs/>
         <ToolsAndClients/>
        <Testimonials/>
        <FAQ/>
      
       </main>
       {/* Floating WhatsApp */}
<a
  href="https://wa.me/918683828646"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="
    fixed bottom-6 left-6 z-[80]
    flex h-14 w-14 items-center justify-center
    rounded-full
    bg-[#25D366]
    text-white
    shadow-[0_10px_30px_rgba(0,0,0,0.18)]
    transition-all duration-300
    hover:-translate-y-1 hover:scale-105
  "
>
  <img src="/wp.jpg" className="rounded-full border-green-600 border-6 " />
</a>

{/* Floating AI Assistant */}
<button
  type="button"
  aria-label="Open AI Assistant"
  className="
    group fixed bottom-6 right-6 z-[80]
    flex h-14 w-14 items-center justify-center
    rounded-full
    bg-[#071a21]
    text-white
    shadow-[0_10px_30px_rgba(0,0,0,0.18)]
    transition-all duration-300
    hover:-translate-y-1 hover:scale-105
  "
>
  <div
    className="
      flex h-10 w-10 items-center justify-center
      rounded-full
      bg-[#087ea4]
      transition-transform duration-300
      group-hover:rotate-6
    "
  >
    <Sparkles size={20} strokeWidth={1.8} />
  </div>

  {/* Tooltip */}
  <span
    className="
      pointer-events-none absolute right-0 bottom-[68px]
      whitespace-nowrap
      rounded-lg bg-[#071a21]
      px-3 py-2
      text-[11px] font-semibold text-white
      opacity-0 translate-y-2
      transition-all duration-200
      group-hover:translate-y-0 group-hover:opacity-100
    "
  >
    AI Assistant
  </span>
</button>
       <Footer/>
   
    </div>
  );
}

export default Home;
