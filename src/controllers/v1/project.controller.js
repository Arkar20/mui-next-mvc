import { project } from "models";
import { successApiResponse } from "../helper/response";

/**
 * @param {*} req
 * @param {*} res
 * @return {Object} all projects
 */
const getAll = async (req, res) => {
  try {
    const projects = await project.all();
    res
      .status(200)
      .json(successApiResponse(200, req.path, projects, "Fetched Successful"));
  } catch (err) {
    console.log(err);
    throw err;
  }
};
/**
 * @param {*} req
 * @param {*} res
 * @return {Object} created project
 */
const store = async (req, res) => {
  try {
    const result = await project.create(req);
    res.json(successApiResponse(204, req.path, result, "Created Successful"));
  } catch (error) {
    console.log(err);
    throw error;
  }
};

export default { getAll, store };
