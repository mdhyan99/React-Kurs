import React from "react";
import { useParams } from "react-router-dom";
// import { Row, Col, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Product = ({ itemsData }) => {
    const { id } = useParams();
    const oneProduct = itemsData.find((i) => i.id === +id);
    return (
        <div className="mb-3">
            <Card className="d-flex flex-row">
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <div className="item-title">{oneProduct.title}</div>
                        <div className="item-price">{oneProduct.price}</div>
                    </Card.Title>
                    <Card.Text>
                        <div className="item-description">
                            {oneProduct.description}
                        </div>
                    </Card.Text>
                    <button className="add-btn">+</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;
