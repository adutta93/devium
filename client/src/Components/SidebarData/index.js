import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "My Profile",
    path: "/userprofile",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "Forum",
    path: "/posts",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  // {
  //   title: "Add Experience",
  //   path: "/add-experirnce",
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: "nav-text",
  // },
  {
    title: "Add Experience",
    path: "/add-experirnce",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Add Education",
    path: "/add-education",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Developers",
    path: "/developers",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Premium",
    path: "/premium",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },

  {
    title: "Logout",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
