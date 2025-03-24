import { getNavbar } from "@/sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import { NavbarData } from "@/types/navbar-types";

const Navbar = async () => {
  const navbar: NavbarData[] = await getNavbar();

  const image = navbar[0]?.image;
  const links = navbar[0]?.links?.map((link) => {
    return {
      name: link.link,
      url: link.url,
      position: link.position,
    };
  });

  return (
    <nav className="flex items-end justify-center gap-[150px] fixed top-0 left-0 right-0 z-50">
      {links &&
        links.map((link, index) =>
          link.position === "left" ? (
            <div key={index} className="pb-2 uppercase font-medium">
              <Link href={link.url}>{link.name}</Link>
            </div>
          ) : null
        )}

      {image && (
        <Image src={image.url} width={85} height={78} alt={image.alt} />
      )}

      {links &&
        links.map((link, index) =>
          link.position === "right" ? (
            <div key={index} className="pb-2 uppercase font-medium">
              <Link href={link.url}>{link.name}</Link>
            </div>
          ) : null
        )}
    </nav>
  );
};

export default Navbar;
