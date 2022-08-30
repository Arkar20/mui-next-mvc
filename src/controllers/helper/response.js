/**
 * Helpers fun (Wrapper fun) for the Api Reposnse Object
 */

import { now } from "moment";

/**
 *
 * @param {Number} code status code of the response
 * @param {*} path url path
 * @param {*} payload reponse object
 * @param {*} message
 * @returns
 */
export const successApiResponse = (code = 200, path, payload, message) => {
  return {
    stamp: now(),
    payload,
    message,
    extra: {
      path,
      code,
      status: true,
    },
  };
};
/**
 *
 * @param {Number} code status code of the response
 * @param {String} path url path
 * @param {String} message
 * @param {Object} extra
 * @returns
 */

export const errorApiResponse = (code = 500, path, message, extra) => {
  return {
    stamp: now(),
    message: message ?? "Server Error",
    extra: {
      path,
      code,
      status: false,
      ...extra,
    },
  };
};
