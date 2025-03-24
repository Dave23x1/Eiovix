interface ImageType {
  url: string;
  alt: string;
  asset: {
    url: string;
  };
}

interface LinkType {
  link: string;
  url: string;
  position: "left" | "right";
}

export interface NavbarData {
  image: ImageType;
  links: LinkType[];
}
