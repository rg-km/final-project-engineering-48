import { useState, useEffect } from 'react'
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/listArticle.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListCategory(props) {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const [products, setProduct] = useState([]);
 
      useEffect(() => {
          getProducts();
      }, []);
   
      const getProducts = async () => {
          const response = await axios.get('http://localhost:8080/api/article/category');
          setProduct(response.data.data);
      }

      return (
            <>
            <div className="container">
                <div className="row">
                { products.map((product, index) => (
                    <div className="col-md-4">
                    <Card style={{ width: '18rem', border: 'transparent' }}>
                        <Card.Img variant="top" src="https://www.pngall.com/wp-content/uploads/2016/03/Book-PNG.png" />
                        <Card.Body>
                            <Card.Title className="text-center" style={{fontWeight: "bold"}}>{product}</Card.Title>
                        </Card.Body>
                        </Card>
                    </div>
                )) }
                </div>
            </div>
            </>
      ); 
}
