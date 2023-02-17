import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CardList = ({itemsData} ) => {
    return (
        <Row>
            {
                itemsData.length >= 1 ? (itemsData.map((item)=>{
             
                    return(
                        <Col 
                        key={item.id}
                        sm="12" className="mb-3"> 
                        

                        <Card className="d-flex flex-row">
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-between">
                                    <div className="item-title">{item.title}</div>
                                    <div className="item-price">{item.price}</div>
                                </Card.Title>
                                <Card.Text>
                                    <div className="item-description">
                                    {item.description}
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            <Link to={"/product/"+item.id}>

                            <Card.Img   variant="link" className="img-item"  src={item.imgUrl} />
                            </Link>
                        </Card>

                    </Col>
                    )

                })):<h3 className= "text-center"> es gibt keine Menü </h3>
            }
          
        </Row>
    );
};

export default CardList;
