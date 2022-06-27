import CreateArticle from "./components/createArticle";
import ListArticle from "./components/listArticle";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
<<<<<<< HEAD
import { NavLink, Route, Routes, Link} from "react-router-dom";
import ListCategory from "./components/listCategory";
import React, {useEffect, useState} from "react";
import axios from "axios";
import DetailArticle from "./components/detailArticle";

=======
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ListCategory from "./components/listCategory";
import React, {useEffect, useState} from "react";
import axios from "axios";
import NavbarCom from "./components/Navbar";
import HomePage from "./components/HomePage";
import Reading from "./components/Reading";
import About from "./components/About";
import DetailArticle from "./components/detailArticle";
>>>>>>> 5b7762a2b4a3b90ee474ea9d86dbe8e768fc20b0


function App() {
  const NAVBAR = {
    backgroundColor: "#F2CB8A",
  }
  
  return (
    <div className="App">
<<<<<<< HEAD
      {/* navbar */}
      <div className="main-wrappe" style={NAVBAR}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-navnew static-top mb-5 shadow">
        <div className="container">
          <a className="navbar-brand" href="#">
            TulisAja
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Writing
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#create">
                <Link to="/ListCategory">Reading</Link>
              </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>


        <h1>LET'S ENJOY THIS VAST READ AND WRITE UNIVERSE</h1> <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={require('../src/assets/landing.png')} className="landing-image"/><br></br><br></br><br></br><br></br>
        </div>     

        <br></br><br></br><br></br><br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{backgroundColor:"#F2CB8A", borderRadius:"50%", margin:"50px" , width:"100px", height:"50px"}}>LOG IN</button>
        <button style={{backgroundColor:"#F2CB8A", borderRadius:"50%", margin:"50px",  width:"100px", height:"50px"}}>REGISTER</button>
        </div>
        

        <ListArticle list = {list}/>
        <br></br><br></br><br></br>
      <Routes>
        <Route path="/ListCategory" element={<ListCategory />} />
      </Routes>
      <Routes>
        <Route path="/DetailArticle" element={<DetailArticle />} />
      </Routes>
        <CreateArticle id="create"/>
        <br></br><br></br><br></br>
        {/* <ListCategory/> */}

        {/* footer */}
        <footer className="fixed-bottom bg-navnew" style={NAVBAR}>
=======
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
>>>>>>> 5b7762a2b4a3b90ee474ea9d86dbe8e768fc20b0
        <div className="text-center p-3 text-white">© Engineering48 | Ruangguru | 2022</div>
      </footer>
    </div>
  );
}

export default App;
