import React from 'react';
import { Button } from 'react-bootstrap';
import './name.css'

const Name = ({ onClick }) => {
    return (
        <Button id="buttonClass" onClick={onClick}>Name</Button>
    )
}
export default Name;