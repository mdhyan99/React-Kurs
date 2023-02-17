import React from 'react'
import { Col, Row } from "react-bootstrap";

const DatesAction = ({onDelete,onViewData}) => {
  return (
    <Row className="justify-content-center my-2">
    <Col sm="8" className="d-flex justify-content-between">
        <button onClick={onDelete} className="btn-style p-2">Termine löchen</button>
        <button onClick={onViewData} className="btn-style p-2"> Zeig Termine</button>
    </Col>
</Row>
  )
}

export default DatesAction