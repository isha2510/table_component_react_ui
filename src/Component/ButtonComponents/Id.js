import React from 'react';
import { Button } from 'react-bootstrap';
import './id.css'

const Id = ({ onClick }) => {
    return (
        <Button id="IdbuttonClass" onClick={onClick}>Id</Button>
    )
}
export default Id;