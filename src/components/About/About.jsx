import React from 'react'
import profile_img from '../../assets/profile_img.jpg'
import html_5 from '../../assets/html_5.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import tailwind from '../../assets/tailwind.png'
import react from '../../assets/react.png'
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
                            <p className='my-4 fs-4'>I’m a self-taught frontend developer with a background in content writing and a growing passion for crafting responsive, user-friendly web experiences.</p>
                            <p className='my-4 fs-4'>About a year ago, I decided to shift my career from content writing toward web development, and since then, coding has become both my interest and my passion. I enjoy the creative freedom it offers — turning ideas into interactive designs — while learning something new every single day.</p>
                            <p className='my-4 fs-4'>My goal is to continue improving my skills, explore new technologies, and keep diving deeper into the world of web development, no matter how challenging it gets.</p>
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
