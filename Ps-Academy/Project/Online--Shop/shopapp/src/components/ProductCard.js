import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiLike, BiDislike } from "react-icons/bi";
import { Button, Card, Row, Col } from "react-bootstrap";

const ProductCard = ({ item }) => {
    return (
        <Row className="g-3">
            <Col>
                <Card className="h-100">
                    <Card.Img
                        variant="top"
                        src={item.picture2}
                        style={{ height: "400px", objectFit: "cover" }}
                    />

                    <Card.Body className="d-flex flex-column">
                        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                            <span className="spanText ">{item.text}</span>
                            <span className="spanText ms-2 text-muted">
                                {item.price}€
                            </span>
                        </Card.Title>

                        <div className="mt-auto text-center">
                            {/* wenn gibt kein Product in warenkorb zeigt uns nur button in warenkorb */}

                            <Button>in den Warenkorb</Button>

                            <div
                                className="d-flex align-items-center flex-column"
                                style={{ gap: "0.5rem" }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{ gap: "0.4rem" }}
                                >
                                    <Button>-</Button>

                                    <div>
                                        <span className="spanText">
                                            in Warenkorb
                                        </span>
                                    </div>
                                    <Button>+</Button>
                                </div>
                                <Button>
                                    <RiDeleteBin5Line />
                                </Button>
                            </div>
                        </div>

                        {/* button für like und unlike und herzicon */}
                        <div className="likeIcon">
                            <div>
                                <button>
                                    <BiLike />
                                </button>
                            </div>

                            <div>
                                <button>
                                    <BiDislike />
                                </button>
                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                    }}
                                ></button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};
export default ProductCard;
