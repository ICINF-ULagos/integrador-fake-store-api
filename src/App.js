
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from './components/Layout'
import PrivateRoute from "./components/PrivateRoute";
import Login from './screens/auth/Login'
import Register from './screens/auth/Register'

import Home from './screens/home/Home'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (<div>Dashboard</div>)
}

function About() {
  return (<div>About</div>)
}





const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route  path="/register" element={<Register />} />
      <Route  path="/" element={<Home />}/>
       
    </>
  )
);

function App() {

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
