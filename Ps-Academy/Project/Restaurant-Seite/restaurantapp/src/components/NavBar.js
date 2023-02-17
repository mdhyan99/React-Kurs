import React from "react";
import { Button, Form, Container, Navbar } from "react-bootstrap";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Links from "./Links";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <div className="res-name">Rayan Restaurant</div>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <div bg="dark" variant="dark" className=" korp-login">
                <AiOutlineUser className="korp" />
            <Link className="link" to="/favoriteproduct">
                <AiOutlineHeart className="korp" />
                </Link>
                <BsCartCheck className="korp" />
            </div>
<Links />
            
        </div>
    );
};

export default NavBar;
