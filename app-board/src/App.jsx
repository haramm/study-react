import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home';
import BoardList from './pages/board/BoardList';
import JoinForm from './pages/JoinForm';
import Layout from './layout/Layout';

const router = createBrowserRouter([
  {
    path:'/',
    Component : Layout,
    children : [
      {
        index:true, Component:Home
      },
      {
        path:'/board',
        Component : BoardList,
      },
      {
        path:'login',
        Component : Login
      },
      {
        path:'join',
        Component:JoinForm
      }
    ]
  },
]);

function App() {
  
  return <RouterProvider router={router}/>
}

export default App
