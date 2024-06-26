import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffee from './componant/Addcoffee.jsx';
import Updatecoffee from './componant/Updatecoffee.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path: "/addcoffee",
    element: <Addcoffee></Addcoffee>,
  },
  {
    path: "updatecoffee/:id",
    element: <Updatecoffee></Updatecoffee>,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
