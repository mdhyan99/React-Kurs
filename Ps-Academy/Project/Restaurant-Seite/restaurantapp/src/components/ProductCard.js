import React,{useContext} from "react";
import { Col, Card, Row } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import FavoriteContext from "../context/FavoriteContex";
const ProductCard = ({ item }) => {
    const { favoritep,addFav,removeFav,addLike,like}= useContext(FavoriteContext)
    console.log(favoritep);

    return (
        
                    <div className="d-flex  justify-content-between card  ">
       
                
     <Row>

           <Col>
           <img
                    variant="top"
                    className="img-item"
                    src={item.imgUrl}
                    alt="gff"
                />
                <div>
     <div className="d-flex justify-content-around"> <span className="item-title">{item.title}</span>
                    <span className="item-price">{item.price}</span></div>
                    <p className="item-description">
                        {item.description}
                    </p>
                        <div className="d-flex justify-content-around">
                <BsHeart onClick={()=> addFav(item.id)} />
                    <BiLike onClick={()=> addLike(item.id)} />
                    {like}
                </div>
          
                </div>
           
        </Col>
           </Row>
        
            </div>
        
    );
};

export default ProductCard;
