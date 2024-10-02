import React from "react"
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Chat from "./components/Chatbot/Chatbox"
import Dashboard from "./components/Dashboard/Dashboard"
import { useAuth0 } from "@auth0/auth0-react";

export default function App(){
  const { user, loginWithRedirect, isAuthenticated, logout  } = useAuth0();
  return(
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chat" element={<Chat/>}/>
          {isAuthenticated && <Route path="/dashboard" element={<Dashboard/>}/>}
        </Routes>
    </>
  )
}