import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function ErrorNotFound() {
  return (
    <div>
      <h1>Page Not Found 404 Error</h1>
      <Link to="/"><Button>Go Home</Button></Link>
      <Link to="/about"><Button>Go About</Button></Link>
    </div>
  );
}
