import { ServiceSchema } from "../../types/services";

const services: ServiceSchema = {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().min(3).max(50),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(3).max(50),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ name: "block", title: "Block", type: "block" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
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
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};

export default services;
