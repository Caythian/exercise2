import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Culture from './Culture';
import Tutorial from './Tutorial';
import Resources from './Resources';
//import the rest of the page here


const root = ReactDOM.createRoot(document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Culture",
    element: <Culture/>,
  },
  {
    path: "/Tutorial",
    element: <Tutorial/>,
  },
  {
    path: "/Resources",
    element: <Resources/>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
