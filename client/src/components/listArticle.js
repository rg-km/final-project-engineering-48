import React from "react";
import "../styles/listArticle.css";
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
                                  <p className="slider-subject">{slide.Subject}</p>
                                  <p className="slider-category">genre : {slide.category}</p>
                                  <p className="slider-username">by : {slide.UserUsername}</p>
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
