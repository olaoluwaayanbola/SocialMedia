import './index.css'
import { App }from './App'
import React from 'react'
import {Router} from "./App"
import ReactDOM from 'react-dom/client'
import { 
  RouterProvider, 
  BrowserRouter 
  } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
      {/* <RouterProvider router={Router} /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
