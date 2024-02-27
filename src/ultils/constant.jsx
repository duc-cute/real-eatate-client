/** @format */

import path from "./path";
import icons from "./icons";
const { BsFillHouseGearFill, MdOutlineDashboard } = icons;

export const navigation = [
  {
    id: 1,
    path: path.HOME,
    title: "HOME",
  },
  {
    id: 2,
    path: path.ABOUT_US,
    title: "ABOUT US",
  },
  {
    id: 3,
    path: path.OUR_AGENT,
    title: "OUR AGENTS",
  },
  {
    id: 4,
    path: path.PROPERTIES,
    title: "PROPERTIES",
  },
  {
    id: 5,
    path: path.SEARCH,
    title: "SEARCH",
  },
];

export const optionsAccount = [
  {
    id: "user",
    value: "USER",
  },
  {
    id: "agent",
    value: "AGENT",
  },
];

export const sidebarAdmin = [
  {
    id: 1,
    path: `/${path.ADMIN_LAYOUT}/${path.DASHBOARD}`,
    title: "dashboard",
    icon: <MdOutlineDashboard />,
    type: "SINGLE",
  },
  {
    id: 2,
    title: "Property Type",
    type: "PARENT",
    icon: <BsFillHouseGearFill />,
    sub: [
      {
        id: 2.1,
        title: "Manage Property Type",
        path: `/${path.ADMIN_LAYOUT}/${path.MANAGE_PROPERTY_TYPE}`,
      },
      {
        id: 2.2,
        title: "Create Property Type",
        path: `/${path.ADMIN_LAYOUT}/${path.CREATE_PROPERTY_TYPE}`,
      },
    ],
  },
];
