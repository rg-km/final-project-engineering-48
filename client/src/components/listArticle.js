import React from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../styles/listArticle.css";
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
