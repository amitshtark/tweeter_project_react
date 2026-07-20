import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx';
import Navbar from "./components/Navbar.jsx"


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App
