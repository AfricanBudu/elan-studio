import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="flex justify-between w-full h-screen bg-no-repeat bg-cover pt-[64px] px-[8.3vw]"
      style={{
        backgroundImage: `linear-gradient(#22222280 100%), url('/hero-1.png')`,
      }}
    >
      <div className="flex flex-col gap-9 pt-[8.3vw]">
        <p className="text-[50px] leading-[52px] max-w-[758px] font-semibold">
          We take pride in building stylish and featured interior design.
        </p>
        <div className="flex flex-col gap-[21vh]">
          <Link href="/" className="flex items-center gap-3 w-max">
            <p className="text-[26px] text-[#F5F5F5] leading-[52px] font-medium">
              Explore site
            </p>
            <Image
              src="/right-arrow.svg"
              alt="view"
              className=" pt-1"
              width={22}
              height={19}
            />
          </Link>
          <div className="flex flex-col gap-6">
            <Link href="/facebook" className="w-max">
              <Image
                src="/facebook.svg"
                alt="facebook profile"
                width={11}
                height={17}
              />
            </Link>
            <Link href="/instagram" className="w-max">
              <Image
                src="/instagram.svg"
                alt="instagram profile"
                width={11}
                height={17}
              />
            </Link>
            <Link href="/twitter" className="w-max">
              <Image
                src="/twitter.svg"
                alt="twitter profile"
                width={11}
                height={17}
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col h-full justify-end gap-[13.4vw] pb-[3.2vw]">
          <div className="flex flex-col items-end gap-[29px]">
            <div className="rounded-full size-[12.21px] bg-[#FFFFFFE5] border border-[#FFF3DC]" />
            <div className="rounded-full size-[12.21px] bg-[#FFFFFF33] border" />
            <div className="rounded-full size-[12.21px] bg-[#FFFFFF33] border" />
          </div>
          <p className="text-[32px] text-[#FFF3DC] font-semibold tracking-[-0.64px]">
            01/<sup className="text-[19px] leading-[-0.38px]">03</sup>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
