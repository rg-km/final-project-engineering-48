import CreateArticle from "./components/createArticle";
import ListArticle from "./components/listArticle";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ListCategory from "./components/listCategory";
import React, {useEffect, useState} from "react";
import axios from "axios";
import NavbarCom from "./components/Navbar";
import HomePage from "./components/HomePage";
import Reading from "./components/Reading";
import About from "./components/About";
import DetailArticle from "./components/detailArticle";


function App() {
  const NAVBAR = {
    backgroundColor: "#F2CB8A",
  }
  
  return (
    <div className="App">
    <NavbarCom></NavbarCom>
    <Routes>
      <Route path="/" element={ <HomePage/> } />
      <Route path="about" element={ <About/> } />
      <Route path="reading" element={ <Reading/> } />
      <Route path="writing" element={ <CreateArticle/> } />
      <Route path="/DetailArticle" element={<DetailArticle />} />
    </Routes>

    {/* footer */}
    <footer className="fixed-bottom bg-navnew" style={NAVBAR}>
        <div className="text-center p-3 text-white">© Engineering48 | Ruangguru | 2022</div>
      </footer>
    </div>
  );
}

export default App;
