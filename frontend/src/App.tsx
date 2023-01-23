import './App.css'
import { useState } from 'react'
import React, { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {createBrowserRouter} from "react-router-dom";

const TopBarNavigation = React.lazy(():any => import("./components/Navigations/Navigation"))


export function App() {
  return (
    <div className="App">
      <TopBarNavigation/>
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


