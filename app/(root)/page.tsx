import { getBanner } from "@/sanity/sanity-utils";
import Image from "next/image";

const page = async () => {
  const banner = await getBanner();

  const backgroundImage = banner[0].backgroundImage.url;

  console.log("banner", banner);
  return (
    <div>
      <Image
        src={backgroundImage}
        width={1920}
        height={1080}
        alt={banner[0].backgroundImage.alt}
        className=""
      />
    </div>
  );
};

export default page;
