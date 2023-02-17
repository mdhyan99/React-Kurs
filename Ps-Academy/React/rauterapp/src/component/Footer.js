import React from 'react';
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';


export default function Footer() {
  return (
    <div>
      <h1>footer</h1>
      {/* <a href="/" >Go Home</a> // diese macht laoding für Seite */}
      <Link to="/"><Button>Go Home</Button></Link>
      <Link to="/content"><Button>Go Content</Button></Link>
    </div>
  );
}
