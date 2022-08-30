/**
 * Models contain the business logic
 */

import prisma from "database";
/**
 * @returns all the projects
 */
const all = async () =>
  prisma.project.findMany({
    where: {
      softDelete: false,
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
      img: true,
      slug: true,
    },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
/**
 *
 * @param {String} slug
 */

const findOne = async (slug) => {
  const project = await prisma.project.findFirst({
    slug,
  });

  return project;
};

/**
 *
 * @param {req} req define the data to create
 * @returns the created data
 */
const create = (req) => {
  const projectSlug = req.body.slug.split(" ").join("-").toLowerCase();

  const data = {
    title: req.body.title,
    desc: JSON.stringify(req.body.desc),
    img: req.body.img,
    slug: projectSlug,
  };

  const result = prisma.project.create({
    data,
  });
  return result;
};

export default { all, create, findOne };
