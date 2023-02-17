import React from 'react'
import { Row } from 'react-bootstrap';
import data from '../data/Products.json'
import ProductCard from './ProductCard';

const Category = ({ category }) => {
    const data_Category = category ? data.filter((d) => d.category === category)
    : data;
  return (
    <div className='start'>
    <Row md={2} xs={1} lg={4} className="g-3">
        {data_Category.map((item) => (
         <ProductCard key={item.id} item={item} />
        ))}
    </Row>
</div>
  )
}

export default Category