import React,{useState} from "react";
import { Container , FormControl, Nav, Navbar, Row } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import { BsCartCheck } from 'react-icons/bs';

const NavBar = ({filterbySearch}) => {
    const [searchValue, setSearchValue] = useState("");


 const onSearch = () =>{
    //   e.preventdefault()
      filterbySearch(searchValue)
    //   setSearchValue('')// die löcht was in input schreibt nach dem search
 }
            return (
                <Row sm="12">
            
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <div className="brand-color">ahmad Restaurant</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        ></Nav>
                        <div className="d-flex justify-content-between">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mx-2"
                                onChange={(e)=>setSearchValue(e.target.value)}
                                value={searchValue}
                            />
                            
                            <button onClick={onSearch}  className="btn-search">Search</button>
  <div className="btn-korb"><BsCartCheck /></div>

                            </div>
              
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    );
};

export default NavBar;
