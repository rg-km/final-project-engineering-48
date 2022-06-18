import React from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../styles/listArticle.css";
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListArticle(props) {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      return (
            <div className="listArticle">
                  <div class="wrapper">
                        <div class="item" onClick={handleShow}>box1</div>
                        <div class="item">box2</div>
                        <div class="item">box3</div>
                        <div class="item">box4</div>
                        <div class="item">box5</div>
                        <div class="item">box6</div>
                        <div class="item">box1</div>
                        <div class="item">box2</div>
                        <div class="item">box3</div>
                        <div class="item">box4</div>
                        <div class="item">box5</div>
                        <div class="item">box6</div>
                  </div>
                  <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                  <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                        Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                        Save Changes
                  </Button>
                  </Modal.Footer>
                  </Modal>
            </div>
      ); 
}
=======
import {MdChevronRight, MdChevronLeft} from "react-icons/md";

export default function ListArticle(props){
      const slideLeft =()=>{
          let slider = document.getElementById("slider");
          slider.scrollLeft = slider.scrollLeft - 435;
      }
  
      const slideRight =()=>{
          let slider = document.getElementById("slider");
          slider.scrollLeft = slider.scrollLeft + 435;
      }
  
      return(
      <div className="listArticle">
            <h1>List Article</h1>
          <div id="slider-container">
              <MdChevronLeft size={40} className="icon-left" onClick={slideLeft}/>
              <div id="slider">
                 { 
                  props.list.map((slide,index)=>{
                          return(
                              <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>
                                  <p className="slider-subject">{slide.subject}</p>
                                  <p className="slider-category">genre : {slide.category}</p>
                                  <p className="slider-username">by : {slide.username}</p>
                              </div>
                          )
                      })
                  }
              </div>
              <MdChevronRight size={40} className="icon-right" onClick={slideRight}/>
          </div>
      </div>
      )
  }
>>>>>>> 0e104890f8664c6986e61a76f90d3f75988c8899
