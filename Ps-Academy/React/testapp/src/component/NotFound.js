import { Alert } from 'react-bootstrap'
import React from 'react'

function NotFound(props) {
  return (
    <div>
        <Alert  variant={props.color}>
          {props.message}
        </Alert>
    </div>
  )
}

export default NotFound