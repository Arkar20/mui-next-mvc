import { check } from "src/middlewares/joi";
import { Project } from "src/middlewares/joi/schemas";

export default {
  schema: {
    Project,
  },
};

export { check };
