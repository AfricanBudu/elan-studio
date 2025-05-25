import { serviceLIst } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <div className="flex flex-col items-center justify-center text-[#E2D9C8] py-7 gap-[47px]">
      <h1 className="text-[26px] text-[#DA9C27A6] font-semibold leading-[52px]">
        OUR SERVICES
      </h1>
      <div className="w-full flex justify-between items-start">
        {serviceLIst.map(({ title, description, image, url }) => (
          <div key={title} className="flex flex-col items-start gap-[15px]">
            <Image
              src={image}
              width={70}
              height={63}
              alt="design"
              className=""
            />
            <h2 className="text-[25px] text-[#F4F2F2] font-medium leading-[31px] uppercase">
              {title}
            </h2>
            <p className="max-w-[300px] text-[20px] tracking-[1.2px] text-[#E2D9C8] leading-[25px] ">
              {description}
            </p>
            <Link
              className="flex items-center gap-[17px]"
              href={"/services/design-consultation"}
            >
              <p className="text-[25px] leading-[52px] text-[#F5F5F5]">
                Read more
              </p>
              <Image
                className="mt-1"
                src="/right-arrow.svg"
                width={18}
                height={21}
                alt="more"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
