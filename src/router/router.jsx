import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../home/Home";
import Timeline from "../pages/timeline/Timeline"
import StatusChart from "../pages/status/StatusChart"

export const router = createBrowserRouter([
    {
      path: "/",
      Component: App,
      children:[
        {
          index:true,
          Component:Home
        },
        {
          path:"/timeline",
          Component:Timeline
        },
        {
          path:"/status-graph",
          Component:StatusChart
        }
      ]
    },
  ]);

