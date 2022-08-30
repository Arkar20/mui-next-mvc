/** @module ./middlewares/joi/schema */

const check =
  (isWhat, schema = {}) =>
  (req, res, next) => {
    try {
      const { error } = schema.validate(req[isWhat]);

      if (error) {
        res.status(400).send({
          error: {
            reason: error.details[0].message,
            route: req.path,
            code: 400,
            status: false,
          },
        });
      } else {
        next();
      }
    } catch (error) {
      res.status(400).send({
        error: {
          reason: error.message,
          route: req.path,
          code: 400,
          status: false,
        },
      });
    }
  };

export { check };
