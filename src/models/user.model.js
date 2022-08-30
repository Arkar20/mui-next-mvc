/**
 * Models contain the business logic
 */
import prisma from "database";
import bcrypt from "bcryptjs";

/**
 *
 * @param {*} body from req.body
 * @returns User
 */
const create = async (body) =>
  await prisma.user.create({
    data: { ...body, password: hashPassword(body.password) },
  });

const findByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};

export default { create, findByEmail };

// --------------helpers-----------------//

const hashPassword = (password) => {
  try {
    const salt = bcrypt.genSaltSync(Number(process.env.SALTROUND));
    const hash = bcrypt.hashSync(password, salt);

    return hash;
  } catch (err) {
    console.log(err);
  }

  return hash;
};
