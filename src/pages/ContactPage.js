import React, {useState} from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Form from'react-bootstrap/Form'
import Col from'react-bootstrap/Col'

import Button from 'react-bootstrap/Button'
import {db} from '../components/firebase'


const ContactPage = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)
  
        db.collection("contacts")
            .add({
                name: name,
                email: email,
                message: message,
            })
            .then(() => {
                alert("Your message has been submitted👍");
                setLoader(false)

            })
            .catch((error) => {
                alert(error.message);
                setLoader(false)
            });
  
            setName("");
            setEmail("");
            setMessage("");
        };
  
        return(
            <div >
                <Hero title={props.title}/>
                <Content >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Col lg={6} md={8} sm={12} xs={12} >
                                <Form.Label  htmlFor='full-name'>Full Name</Form.Label>
                                <Form.Control 
                                    id="full-name" 
                                    name='name'
                                    type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    />
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Col lg={6} md={8} sm={12} xs={12}>
                                <Form.Label htmlFor='email'>Email</Form.Label>
                                <Form.Control 
                                    id="email" 
                                    name='email'
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Col lg={6} md={8} sm={12} xs={12}>
                                <Form.Label htmlFor='message'>message</Form.Label>
                                <Form.Control 
                                    id="message" 
                                    name='message'
                                    as='textarea'
                                    rows='3'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    />
                            </Col>                               
                        </Form.Group>
                        
                        <Button 
                            className='d-inline-block' 
                            variant='primary' 
                            type='submit' 
                            style={{background:loader? '#ccc':'blue'}}
                        >
                            Send
                        </Button>
                        {/* <div className='height-adjust'></div> */}
                    </Form>
                </Content>
            </div>
        )
    }

export default ContactPage