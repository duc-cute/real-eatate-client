/** @format */

import axios from "~/axios";

export const apiGetProperties = () =>
  axios({
    url: "/property",
    method: "GET",
  });
