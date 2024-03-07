/** @format */

import axios from "~/axios";
export const apiRegister = (data) =>
  axios({
    url: "/auth/register",
    method: "post",
    data,
    withCredentials: true,
  });
export const apiSignIn = (data) =>
  axios({
    url: "/auth/signin",
    method: "post",
    data,
    withCredentials: true,
  });

export const apiGetCurrent = () =>
  axios({
    url: "/user/current",
    method: "get",
  });

export const apiRefreshAccessToken = () =>
  axios({
    url: "/auth/refresh-accesstoken",
    method: "post",
  });
export const apiGetRoles = () =>
  axios({
    url: "/user/roles",
    method: "get",
  });
