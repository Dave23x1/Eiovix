import { Rule } from "@/types/schema-type";

const team = {
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "members",
      title: "Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
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
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "position",
              title: "Position",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            },
            {
              name: "social",
              title: "Social",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "name",
                      title: "Name",
                      type: "string",
                    },
                    {
                      name: "url",
                      title: "URL",
                      type: "url",
                      validation: (Rule: Rule) =>
                        Rule.uri({
                          allowRelative: true,
                          scheme: ["http", "https"],
                        }).required(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default team;
