import { getProjects } from "@/sanity/sanity-utils";

const page = async () => {
  const projects = await getProjects();

  console.log("projects", projects);

  return <div></div>;
};

export default page;
