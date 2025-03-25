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

export async function getBanner() {
  return createClient(config).fetch(
    groq`*[_type == "banner"]{
            _id,
            _createdAt,
            title,
            description,
            cta,
            "ctaLink": ctaLink,
            "image": image{
              "url": asset->url,
              alt
            },
            "backgroundImage": backgroundImage{
              "url": asset->url,
              alt
            },
            position
        }`
  );
}

export async function getServices() {
  return createClient(config).fetch(
    groq`*[_type == "services"]{
            _id,
            _createdAt,
            name,
            title,
            description[]{
              ...,
              markDefs[]{
                ...,
                _type == "link" => {
                  "href": @.href
                }
              }
            },
            images[]{
              "url": asset->url,
              alt
            }
        }`
  );
}
