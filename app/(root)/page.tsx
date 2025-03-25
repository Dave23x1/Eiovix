import Banner from "@/components/banner";
import TeamComponent from "@/components/team";

const page = () => {
  return (
    <>
      <Banner number={1} className="w-[500px] text-[50px]" />
      <Banner number={0} className="w-[500px] text-[24px]" />
      <TeamComponent />
    </>
  );
};

export default page;
