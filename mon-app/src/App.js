import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMe from "./pages/AboutMe";
import MyAchievements from "./pages/MyAchievements";
import ContactMe from "./pages/ContactMe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/my-achievements' element={<MyAchievements />} />
        <Route path='/contact-me' element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
