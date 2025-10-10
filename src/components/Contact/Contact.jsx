import React, { useRef, useState } from 'react';
import './Contact.css';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dri3t9k', 'template_m6quotb', form.current, {
                publicKey: 'xZXqXOoeEc5vqnw0l',
            })
            .then(
                () => {
                    setStatus('✅ Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus('❌ Failed to send message. Please try again.');
                }
            );
    };

    return (
        <section id="contact">
            <Container className="text-center">
                <h1>Contact Me</h1>
                <Row>
                    <Col className="details">
                        <h1>Get in touch</h1>
                        <p>
                            I'm currently looking for an internship or training program to headstart my journey in frontend development.
                            Working under skilled mentors and professionals will surely help me learn a lot.
                            So feel free to message or email me if you find me qualified enough to work with you.
                            Let's get in touch right away!
                        </p>
                        <br />
                        <p><FontAwesomeIcon icon={faEnvelope} className="font-icon" /> roypratik1991@gmail.com</p>
                        <p><FontAwesomeIcon icon={faPhone} className="font-icon" /> +918910092953</p>
                        <p><FontAwesomeIcon icon={faLocationDot} className="font-icon" /> Kolkata, India</p>
                    </Col>

                    <Col className="details">
                        <Form ref={form} onSubmit={sendEmail}>

                            <Form.Label className="formLabel">Your Name</Form.Label>
                            <InputGroup size="lg">
                                <Form.Control
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                />
                            </InputGroup>

                            <Form.Label className="formLabel">Your Email</Form.Label>
                            <InputGroup size="lg" className="mb-3">
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </InputGroup>

                            <Form.Group>
                                <Form.Label className="formLabel">Your Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    placeholder="Write your message here..."
                                    rows={7}
                                    required
                                />
                            </Form.Group>
                            <Button type="submit" className="submit" size="lg">
                                Submit
                            </Button>
                        </Form>
                        {status && <p className="status">{status}</p>}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
