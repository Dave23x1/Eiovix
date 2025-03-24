import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

export async function getNavbar() {
  return createClient(config).fetch(
    groq`*[_type == "navbar"]{
            _id,
            _createdAt,
            name,
            "image": image{
              "url": asset->url,
              alt
            },            
            links[]{
              _key,
              link,
              url,
              position
            }
        }`
  );
}
