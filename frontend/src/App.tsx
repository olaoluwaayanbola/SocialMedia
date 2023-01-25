import './App.css'
import { useState } from 'react'
import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import SideNav from "./components/sideNavigations/SideNav"
import CircularProgress from '@mui/material/CircularProgress';

const TopBarNavigation = React.lazy(():any => import("./components/Navigations/Navigation"))


export function App() {
  return (
    <div className="App">
      <TopBarNavigation/>
      <SideNav/>
    </div>
  )
}

export const Router = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <Suspense fallback={<CircularProgress/>}>

                </Suspense>
        },
        {
            path: "about",
            element: <div>About</div>,
        },
    ]
  )


