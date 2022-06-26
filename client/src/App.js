import CreateArticle from "./components/createArticle";
import ListArticle from "./components/listArticle";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink, Route, Routes, Link} from "react-router-dom";
import ListCategory from "./components/listCategory";
import detailArticles from "./components/detailArticle";
import React, {useEffect, useState} from "react";
import axios from "axios";
import DetailArticle from "./components/detailArticle";



function App() {

//   const list = [
//     {username: "user1", subject: "Little Mermaid",category: "fantasy"},
//     {username: "user2", subject: "Titanic", category: "drama"},
//     {username: "user3", subject: "The Lion King", category: "fantasy"},
//     {username: "user4", subject: "The Little Mermaid", category: "fantasy"},
//     {username: "user5", subject: "Titanic", category: "drama"},
//     {username: "user6", subject: "The Lion King", category: "fantasy"},
//     {username: "user7", subject: "The Little Mermaid", category: "fantasy"},
//     {username: "user8", subject: "Titanic", category: "drama"},
//     {username: "user9", subject: "The Lion King", category: "fantasy"},
//     {username: "user10", subject: "The Little Mermaid", category: "fantasy"},
//     {username: "user11", subject: "Titanic", category: "drama"},
//     {username: "user12", subject: "The Lion King", category: "fantasy"},
// ];

const [listAr, setListAr] = useState([])

  async function fetchArticle() {
    try {
      const respond = await axios.get('http://localhost:8080/api/article/list');
      console.log(respond.data.data)
      setListAr(respond.data.data)

    } catch (error) {
      console.log("can't fetch article", error);
    }
  }

  useEffect(() => {
    
    fetchArticle()
  }, [])

  const list = listAr ; 
  // console.log(list, "ini list postingan")

  const NAVBAR = {
    backgroundColor: "#F2CB8A",
  }

  // const IMAGE = {
  //   textAlign: "center",
  //   justifyContent: "center",
  // }
  return (
    <div className="App">
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
        <Route path="/ListCategory" element={<DetailArticle />} />
      </Routes>
      {/* <Routes>
        <Route path="/DetailArticle" element={<detailArticle />} />
      </Routes> */}
        <CreateArticle id="create"/>
        <br></br><br></br><br></br>
        {/* <ListCategory/> */}

        {/* footer */}
        <footer className="fixed-bottom bg-navnew" style={NAVBAR}>
        <div className="text-center p-3 text-white">© Engineering48 | Ruangguru | 2022</div>
      </footer>
    </div>
  );
}

export default App;
