/** @format */

import axios from "~/axios";

export const apiGetProperties = (params) =>
  axios({
    url: "/property",
    method: "GET",
    params,
  });
