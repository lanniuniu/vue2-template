import request from "./request";

const UserApi = {
  LOGIN: "/auth/login",
  PROFILE: "/users/profile",
};

/**
 * Logs in the user with the provided data.
 *
 * @param {Object} data - The data object containing the message and type.
 * @param {string} data.msg - The message for the login request.
 * @param {string} data.type - The type of login request.
 * @return {Promise} - A promise that resolves with the login response.
 */
export function login(data) {
  return request({
    url: UserApi.LOGIN,
    method: "POST",
    data,
  });
}

export function profile() {
  return request({
    url: UserApi.PROFILE,
    method: "GET",
  });
}
