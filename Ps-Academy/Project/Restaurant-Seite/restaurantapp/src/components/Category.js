import React from "react";

import { Row } from "react-bootstrap";

import { items } from "../data";
import ProductCard from "./ProductCard";

const Category = ({ category }) => {
    const data_Category = category
        ? items.filter((d) => d.category === category)
        : items;
    return (
        <div className="card d-flex justify-content-between g-3">
            <Row md={2} xs={1} lg={2} className="g-4">
                {data_Category.map((item) => (
                    <>
                    {/* <img src={data_Category.imgUrl} alt={data_Category.title} /> */}

                        <ProductCard key={item.id} item={item} />
                    </>
                ))}
            </Row>
        </div>
    );
};

export default Category;
