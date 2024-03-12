import React from 'react';
import './Button.css';

const Button = ({ handleShow }) => {
    return (
        <div>
            <button className="button" onClick={handleShow}>Открыть</button>
            <button className="button" onClick={handleShow}>Закрыть</button>
        </div>
    );
};

export default Button;

