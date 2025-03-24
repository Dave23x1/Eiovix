import { Rule } from "@/types/schema-type";

const banner = {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "cta",
      title: "Call to Action",
      type: "string",
    },
    {
      name: "ctaLink",
      title: "Call to Action Link",
      type: "url",
      validation: (Rule: Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["http", "https"],
        }).required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "checkbox",
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
export default banner;
