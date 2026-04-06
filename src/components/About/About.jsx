import React from 'react'
import profile_img from '../../assets/profile_img.jpg'
import html_5 from '../../assets/html_5.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import tailwind from '../../assets/tailwind.png'
import react from '../../assets/react.png'
import figma from '../../assets/figma.png'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <section id='about'>
            <div className='about p-3'>
                <div className="container">
                    <h1 className='text-center'>About Me</h1>
                    <div className="row align-items-center my-5">
                        <div className="col-md-6 col-sm-12 mb-3 p-3">
                            <img id='about-img' src={profile_img} />
                        </div>
                        <div className="col-md-6 col-sm-12 mb-3 p-3">
                            <p className='my-5 fs-5'>I'm a self-taught Frontend Developer and UI/UX Designer based in Kolkata, India, focused on building clean, responsive, and user-friendly web experiences.</p>
                            <p className='my-5 fs-5'>My journey into tech began after transitioning from a background in content writing, where I developed a strong appreciation for clarity, structure, and communication — skills that now influence how I approach both design and development.</p>
                            <p className='my-5 fs-5'>Today, I enjoy designing intuitive interfaces and bringing them to life through code. I'm constantly exploring better ways to improve usability, visual hierarchy, and performance while continuing to grow as both a developer and a designer.</p>
                        </div>
                    </div>

                    <section id='skills'>
                        <div id='skillBox'>
                            <h2 className='text-center'>My Skills</h2>
                            <Container>
                                <Row className='text-center my-5'>
                                    <Col><img className='logos-img' src={html_5} /></Col>
                                    <Col><img className='logos-img' src={css} /></Col>
                                    <Col><img className='logos-img' src={js} /></Col>
                                    <Col><img className='logos-img' src={tailwind} /></Col>
                                    <Col><img className='logos-img' src={react} /></Col>
                                    <Col><img className='logos-img' src={figma} /></Col>
                                </Row>
                            </Container>
                        </div>
                    </section>
                </div>
            </div>
            <hr />
        </section>

    )
}

export default About
