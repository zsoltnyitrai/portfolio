import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import codewars from '../images/codewars.png'
import git from '../images/git.png'
import linkedin from '../images/linkedin.png'




const Footer=()=>{
    return(
            <div  className='bg-transparent' >
                <Container fluid={true}>
                    <Row className=' border-top justify-content p-3 '>
                        <Col className='p-0'>
                            Nyitrai Zsolt
                        </Col>
                        <Col className='footer-card-div'>
                        
                            <a href="https://github.com/zsoltnyitrai">
                                <img
                                className='footer-card' 
                                src={git}></img>
                            </a>
                            <a href='https://www.codewars.com/users/nyzs'>
                            <img 
                                className='footer-card'
                                src={codewars}></img>
                            </a>
                            <a href="https://www.linkedin.com/in/zsolt-nyitrai">
                            <img 
                                className='footer-card' 
                                src={linkedin}></img>
                            </a>
                        </Col>
                        <Col className='p-0 d-flex justify-content-end ' md={3}>
                            This site was made by Nyitrai Zsolt
                        </Col>
                    </Row>
                </Container>
            </div>
    )
} 
export default Footer