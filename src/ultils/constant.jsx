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

export const optionsUser = [
  {
    id: 1,
    role: "ROL1",
    title: "admin",
    path: `/${path.ADMIN_LAYOUT}/${path.ADMIN_DASHBOARD}`,
  },
  {
    id: 2,
    role: "ROL3",
    title: "owner",
    path: `/${path.OWNER_LAYOUT}/${path.OWNER_DASHBOARD}`,
  },
  {
    id: 3,
    role: "ROL5",
    title: "agent",
    path: `/${path.AGENT_LAYOUT}/${path.AGENT_DASHBOARD}`,
  },
  {
    id: 4,
    role: "ROL7",
    title: "user",
    path: `/${path.USER_LAYOUT}/${path.USER_DASHBOARD}`,
  },
];

export const optionsSort = [
  {
    id: 1,
    title: "Price",
    value: "price",
  },
  {
    id: 2,
    title: "Newest",
    value: "-createdAt",
  },
  {
    id: 3,
    title: "Oldest",
    value: "createdAt",
  },
  {
    id: 3,
    title: "Từ A -> Z",
    value: "address",
  },
  {
    id: 4,
    title: "Từ Z -> A",
    value: "address",
  },
];

export const fieldFilter = [
  {
    id: 1,
    title: "All Properties",
    value: "all",
  },
  {
    id: 2,
    title: "For Buy",
    value: "buy",
  },
  {
    id: 3,
    title: "For Sale",
    value: "sale",
  },
  {
    id: 4,
    title: "For Rent",
    value: "rent",
  },
];
