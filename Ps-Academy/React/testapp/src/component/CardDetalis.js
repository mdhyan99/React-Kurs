import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardDetalis =({title,descripion,img,clickMe,children}) => {
  const handleClick = () =>{
    clickMe(title)
  }
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {descripion}
      </Card.Text>
      {children}
      <Button onClick={handleClick} variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default CardDetalis