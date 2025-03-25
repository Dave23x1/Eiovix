import { getTeams } from "@/sanity/sanity-utils";
import background from "@/public/images/background.png";
import backgroundImage from "@/public/images/background-desc.png";
import profile from "@/public/images/profile.png";
import Image from "next/image";

const TeamComponent = async () => {
  const teams = await getTeams();

  console.log("teams", teams);
  return (
    <div className="relative w-[303px] h-[396px]">
      <Image
        src={background}
        alt="background"
        className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      />
      <Image
        src={profile}
        alt="Profile Picture"
        className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        style={{
          objectFit: "cover",
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          backgroundColor: "transparent",
        }}
      />
      <div className="relative z-[-1]">
        <Image
          src={backgroundImage}
          alt="Background Image"
          className="absolute z-[-1]"
        />
      </div>
      <div className="absolute w-full flex flex-col items-center justify-center mt-[78px]">
        <div className="text-[20px] font-bold">Diome Potot</div>
        <div className="text-[12.5px] text-[#FF9447] font-semibold italic">
          Frontend Developer
        </div>
        <div className="mt-[60px] text-[14px] text-center w-[190] font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi
        </div>
      </div>
      <div className="bg-[#1E91A7] w-full h-[50px] absolute bottom-0">
        
      </div>
    </div>
  );
};

export default TeamComponent;
