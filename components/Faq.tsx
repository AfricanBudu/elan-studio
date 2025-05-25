import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Faq = () => {
  return (
    <div className="relative w-full flex items-center justify-between mb-3 py-10">
      <Accordion
        className="w-[40vw] max-w-[545px] h-[550px] bg-[#FFFAF1] text-[#222222F5] font-normal px-[45px] pt-[55px] pb-[40px] z-20"
        type="single"
        collapsible
      >
        <div className="mb-[28px]">
          <p className="text-[17px] leading-[31px]">#Black studio</p>
          <h1 className="text-[26px] leading-[31px] font-medium">
            Creative Approach
          </h1>
        </div>
        {faqItems.map(({ title, description }) => (
          <AccordionItem key={title} value={title}>
            <AccordionTrigger className="text-[17px] leading-[31px] font-medium">
              {title}
            </AccordionTrigger>
            <AccordionContent className="text-[17px] leading-[23px] tracking-[0.51px]">
              {description}
            </AccordionContent>
          </AccordionItem>
        ))}
        <div className="relative mt-8">
          <Link href="/about">
            <button className="w-[179px] h-[63px] border-[0.8px] border-[#000000] rounded-[30px] text-[19px] leading-[25px]">
              Read more
            </button>
          </Link>
        </div>
      </Accordion>
      <div className="absolute top-0 right-[28vw] w-[39vw] max-w-[555px] h-[670px] faq-middle-container z-10">
        <Image
          src="/faq-middle-image.png"
          alt="faq-image"
          width={555}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <Image
        src="/faq-end-image.png"
        alt="faq-end-image"
        width={500}
        height={500}
        className="w-[29vw] max-w-[545px] h-[600px]"
      />
    </div>
  );
};

export default Faq;
