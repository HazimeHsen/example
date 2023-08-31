import Hero from "./components/Hero/Hero";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Solution from "./components/solution/Solution";
import ContactUs from "./components/contactus/ContactUs";

export default function Home() {
  return (
    <div className="flex-grow">
      <Hero />
      <WhatWeDo />
      <Solution />
      <ContactUs />
    </div>
  );
}
