import './App.css'
import { useState } from 'react'
import React, { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {createBrowserRouter,Link} from "react-router-dom";
// import {TopBarNavigation} from "./components/Navigations/Navigation"

const TopBarNavigation = React.lazy(():any => import("./components/Navigations/Navigation"))


export function App() {
  return (
    <div className="App">
      {/* <TopBarNavigation/> */}
    </div>
  )
}

export const Router = 
  createBrowserRouter(
      // basename: "/app",
    [
        {
            path: "/ship",
            // loader:CircularProgress,
            element:
              <Suspense fallback={<CircularProgress/>}>
                <TopBarNavigation/>
              </Suspense>
        },
        {
            path: "about",
            element: <div>About</div>,
        },
  ]
  
  )


