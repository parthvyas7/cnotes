import React from 'react';
import OffcanvasNavbar from './components/Navbar';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <OffcanvasNavbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
