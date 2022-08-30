import { default as joi } from "joi";

const Project = {
  verb: {
    post: joi.object({
      title: joi.string(),
    }),
  },
};
export { Project };
