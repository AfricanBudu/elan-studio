import Link from "next/link";
import { Separator } from "./ui/separator";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      className="flex justify-between items-center gap-14 pt-[6.5vw] pl-[8.3vw] pb-[4vw] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(#222222F5 100%), url('/about-us-bg.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" flex flex-col gap-[26px]">
        <h1 className="text-[26px] text-[#DA9C27A6] font-semibold leading-[52px]">
          ABOUT US
        </h1>
        <h2 className="max-w-[478px] text-[38px] leading-10 font-medium">
          Creative solutions by professional designers
        </h2>
        <p className="max-w-[477px] text-[#E2D9C8] text-xl leading-6 tracking-[1.5px]">
          Our team is made up of great designers around the globe with years of
          experience and professionalism. We’ve tackled several projects this
          past few years, and gained global recognition in our expertise.
        </p>
        <Link
          className="flex justify-center items-center w-[217px] h-[57.84px] bg-[#E0D6C4] rounded-[37px] mt-[18.84px]"
          href="/about-us"
        >
          <p className="text-[#222222] text-2xl leading-6 font-medium tracking-[0.48px] ">
            Read more
          </p>
        </Link>
        <div className="flex items-end gap-8">
          <div className="flex flex-col gap-7 mt-[50px]">
            <p className="relative text-[#DA9C27A6] text-[80.6px] font-semibold leading-[49px]">
              <span>24</span>
              <sup className="absolute top-[3px] bottom-0 text-[36.84px]">
                +
              </sup>
            </p>
            <p>Awards received</p>
          </div>
          <Separator
            orientation="vertical"
            className="w-[0.45px] h-[110px] bg-[#E2D9C8]"
          />
          <div className="flex flex-col gap-7 mt-[50px]">
            <p className="relative text-[#DA9C27A6] text-[80.6px] font-semibold leading-[49px]">
              <span>894</span>
              <sup className="absolute top-[3px] bottom-0 text-[36.84px]">
                +
              </sup>
            </p>
            <p>Projects completed</p>
          </div>
          <Separator
            orientation="vertical"
            className="w-[0.45px] h-[110px] bg-[#E2D9C8]"
          />
          <div className="flex flex-col gap-7 mt-[50px]">
            <p className="relative text-[#DA9C27A6] text-[80.6px] font-semibold leading-[49px]">
              <span>42</span>
              <sup className="absolute top-[3px] bottom-0 text-[36.84px]">
                +
              </sup>
            </p>
            <p> Company Division</p>
          </div>
        </div>
      </div>
      <Image src="/about-us.png" alt="About Us" width={500} height={500} />
    </div>
  );
};

export default AboutUs;
