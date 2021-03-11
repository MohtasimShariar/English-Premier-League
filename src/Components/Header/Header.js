import React from 'react';
import './Header.css'
import { Jumbotron } from 'react-bootstrap';
const Header = () => {
    return (
        
<Jumbotron fluid id='header'>
    <div className="container">
        <h1 className='text-center'>
            Football Fever
        </h1>
    </div>
</Jumbotron>
       
    );
};

export default Header;