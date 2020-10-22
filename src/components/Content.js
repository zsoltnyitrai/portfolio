import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Content=(props)=>{
    return(
        <Container fluid={true} className=''>
            <Row className='justify-content-center '>
                <Col className='ml-5'>
                    {props.children}
                </Col>
            </Row> 
        </Container>
    )
}

export default Content
