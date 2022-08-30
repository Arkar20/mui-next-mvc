import jwt from "jsonwebtoken";
import { successApiResponse, errorApiResponse } from "../helper/response";
import bcrypt from "bcryptjs";

import user from "models/user.model";

/**
 *
 * @param {*} req
 * @param {*} res
 * @return User object with bear token
 */
const login = async (req, res) => {
  try {
    const payload = await user.findByEmail(req.body.email);

    if (!payload) {
      const error = new Error();
      error.msg = "User Not Found";
      throw error;
    }

    //check password
    const correctPassword = bcrypt.compareSync(
      req.body.password,
      payload.password
    );

    if (!correctPassword) {
      const error = new Error();
      error.msg = "Incorrect Password";
      throw error;
    }

    delete req.body.password;
    delete payload.password;
    delete payload.emailVerified;

    const token = createBearToken(payload);

    return res.json(
      successApiResponse(
        200,
        req.originalUrl,
        { ...payload, token },
        "Created Successfully"
      )
    );
  } catch (err) {
    console.log(err)
    const error = handlePrismaError(err);

    res
      .status(500)
      .json(errorApiResponse(500, req.originalUrl, error.msg, error));
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @return User object
 */

const register = async (req, res) => {
  try {
    const payload = await user.create(req.body);

    return res.json(
      successApiResponse(200, req.originalUrl, payload, "Created Successfully")
    );
  } catch (err) {
    const error = handlePrismaError(err);
    return res
      .status(500)
      .json(errorApiResponse(400, req.originalUrl, error.msg, error));
  }
};

const checkToken = async (req, res) => {
  try {
    return "hello";
  } catch (err) {
    console.log(err);
  }
};
export default { login, register, checkToken };

//------------ helpers ------------//

const handlePrismaError = (err) => {
  err.prisma_code = err.code;
  delete err.code;

  if (err.code === "P2002") msg = "There is a unique constraint violation.";

  return err;
};

const createBearToken = (payload) => {
  return jwt.sign(
    {
      data: payload,
    },
    process.env.SECRET,
    { expiresIn: process.env.EXPIRETOKEN }
  );
};
