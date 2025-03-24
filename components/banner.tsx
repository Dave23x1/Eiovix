import { getBanner } from "@/sanity/sanity-utils";
import Image from "next/image";

const Banner = async ({ number }: { number: number }) => {
  const banner = await getBanner();

  const backgroundImage = banner[number].backgroundImage.url;
  const image = banner[number].image.url;
  const description = banner[number].description;

  console.log("banner", banner);
  return (
    <div className="pt-[200px]">
      <Image
        src={backgroundImage}
        width={1920}
        height={1080}
        alt={banner[number].backgroundImage.alt}
        className="absolute z-[-1] top-0 left-0 w-full h-full"
      />

      <div
        className={`flex justify-center items-center ${banner[number].position === "left" ? "flex-row-reverse" : ""}`}
      >
        <div className="text-[50px] font-semibold ">{description}</div>
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
