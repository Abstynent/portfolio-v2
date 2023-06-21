import React, { useState } from 'react';
import '../styles/Body.css';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from './Header';
import Resume from './Resume';

import { Container, Row, Col } from 'react-bootstrap';

function Body() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if(currentPage === 'Home') return (
            <Container fluid className="bg-img h-100 d-flex align-items-center justify-content-center middle">
            <Row>
              <Col className='typewriter text-center'>
                <h1><span className='greeting'>Hi!</span></h1>
                <h2>I'm Lukasz Jurkiewicz</h2>
                <h2>Full Stack Developer</h2>
                <a href='#about'>About me</a>
              </Col>
            </Row>
        </Container>);
        if(currentPage === 'About') return <About />;
        if(currentPage === 'Portfolio') return <Portfolio />;
        if(currentPage === 'Contact') return <Contact />;
        if(currentPage === 'Resume') return <Resume />
    };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
};

export default Body;