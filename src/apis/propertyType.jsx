/** @format */

import axios from "~/axios";

export const apiCreatePropertyType = (data) =>
  axios({
    url: "/property-type/create",
    method: "POST",
    data,
  });
export const apiGetPropertyType = (params) =>
  axios({
    url: "/property-type",
    method: "GET",
    params,
  });
