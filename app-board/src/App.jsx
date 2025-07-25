import { Component, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home';
import BoardList from './pages/board/BoardList';
import JoinForm from './pages/JoinForm';
import Layout from './layout/Layout';
import BoardDetail from './pages/board/BoardDetail';

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
        children : [
          {index: true, Component : BoardList},
          {path: ':id', Component : BoardDetail},
          //{path: 'gallery', Compoen}
        ]
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
