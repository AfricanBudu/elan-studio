import AboutUs from "@/components/AboutUs";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <AboutUs />
      <div className="relative flex flex-col gap-24 px-[8.3vw] bg-[#222222]">
        <Service />
        <Faq />
      </div>
    </div>
  );
}
