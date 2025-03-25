import { getBanner } from "@/sanity/sanity-utils";
import Image from "next/image";
import { Button } from "./ui/button";

const Banner = async ({
  number,
  className,
}: {
  number: number;
  className: string;
}) => {
  const banner = await getBanner();

  const backgroundImage = banner[number].backgroundImage.url;
  const image = banner[number].image.url;
  const description = banner[number].description;
  const title = banner[number].title;

  return (
    <div className="pt-[150px] min-h-screen relative">
      <Image
        src={backgroundImage}
        width={1920}
        height={1080}
        alt={banner[number].backgroundImage.alt}
        className={`absolute z-[-1] top-0 left-0 w-full h-full ${banner[number].position === "left" ? "scale-x-[-1]" : ""}`}
      />

      <div
        className={`flex justify-between items-center ${banner[number].position === "left" ? "flex-row-reverse" : ""}`}
      >
        <div
          className={`flex flex-col font-bold bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent ${className}`}
        >
          <div className="pb-7 text-[32px]">{title}</div>
          {description}
          <Button
            variant={"link"}
            className="bg-blue-500 text-white uppercase w-[150px] mt-[50px]"
          >
            {banner[number].cta}
          </Button>
        </div>
        <div>
          <Image
            src={image}
            width={600}
            height={600}
            alt={banner[number].image.alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
