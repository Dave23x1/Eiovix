import { getBanner } from "@/sanity/sanity-utils";
import Image from "next/image";

const Banner = async ({ number }: { number: number }) => {
  const banner = await getBanner();

  const backgroundImage = banner[number].backgroundImage.url;

  console.log("banner", banner);
  return (
    <div>
      <Image
        src={backgroundImage}
        width={1920}
        height={1080}
        alt={banner[0].backgroundImage.alt}
        className="absolute z-[-1] top-0 left-0 w-full h-full"
      />

      <div className="flex">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
