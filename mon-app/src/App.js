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
        <Route path='/a-propos-de-moi' element={<AboutMe />} />
        <Route path='/mes-realisations' element={<MyAchievements />} />
        <Route path='/me-contacter' element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
