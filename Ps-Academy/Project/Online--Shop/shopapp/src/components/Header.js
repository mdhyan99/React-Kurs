import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { FiHeart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

function Header() {
    return (
        <Navbar sticky="top" bg="black">
            <Container>
                <div
                    className="icons"
                    style={{
                        color: "gray",
                        marginLeft: "5px",
                        fontSize: "20px",
                    }}
                >
                    <BiUser />
                </div>

                <section
                    style={{
                        fontSize: "20px",
                        color: "coral",
                        fontWeight: 900,
                        letterSpacing: "-4px",
                        wordSpacing: "4px",
                        textShadow: "1px 1px 2px rgba(255, 200, 0, 0.801)",
                    }}
                    href="#"
                >
                    Rayan Shop
                </section>

                <input
                    type="search"
                    placeholder="Search"
                    className="searchInput"
                    aria-label="Search"
                />

                <div></div>
                <div className="link">
                    <FiHeart />
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
