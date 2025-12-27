import React from 'react'
import './Projects.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import saas from '../../assets/saas_website.jpg'
import weatherApp from '../../assets/weatherApp.jpg'
import portfolioshot from '../../assets/portfolioshot.jpg'


const Projects = () => {
    return (
        <section id='projects'>
            <div className='projects p-3'>
                <div className='container'>
                    <h1 className='text-center mb-5'>Projects</h1>

                    <Container>
                        <Row className='align-items-center my-5 flex-md-row-reverse'>
                            <Col md={6} sm={12} className='mb-3 p-3 text-center'>
                                <img src={saas} alt='Portfolio Website' className='project-img' />
                            </Col>
                            <Col md={6} sm={12} className='mb-3 p-3'>
                                <h3>SaaS Landing Page (React)</h3>
                                <p className='fs-5'>
                                    A responsive SaaS landing page built using React + Vite and Tailwind CSS. It highlights modern design patterns, smooth UI interactions, responsiveness, and well-structured components, deployed as a live portfolio project.
                                </p>
                                <div className='project-buttons'>
                                    <a href='https://uifrysaas.netlify.app/' target='_blank' rel='noreferrer'>
                                        <Button variant='outline-success' size='lg' className='me-3'>
                                            Live Demo
                                        </Button>
                                    </a>
                                    <a href='https://github.com/pratikroxx91/uifry-SaaS-landing-page' target='_blank' rel='noreferrer'>
                                        <Button variant='outline-light' size='lg'>
                                            GitHub
                                        </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        <Row className='align-items-center my-5'>
                            <Col md={6} sm={12} className='mb-3 p-3 text-center'>
                                <img src={weatherApp} alt='Weather App' className='project-img' />
                            </Col>
                            <Col md={6} sm={12} className='mb-3 p-3'>
                                <h3>Weather App (React)</h3>
                                <p className='fs-5'>
                                    A responsive weather application built using React and the OpenWeather API.
                                    It allows users to search for cities and view live temperature data with dynamic
                                    background images that change based on weather conditions.
                                </p>
                                <div className='project-buttons'>
                                    <a href='https://weather-app-pratik.netlify.app/' target='_blank' rel='noreferrer'>
                                        <Button variant='outline-success' size='lg' className='me-3'>
                                            Live Demo
                                        </Button>
                                    </a>
                                    <a href='https://github.com/pratikroxx91/weather-app' target='_blank' rel='noreferrer'>
                                        <Button variant='outline-light' size='lg'>
                                            GitHub
                                        </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>

                        <Row className='align-items-center my-5 flex-md-row-reverse'>
                            <Col md={6} sm={12} className='mb-3 p-3 text-center'>
                                <img src={portfolioshot} alt='Portfolio Website' className='project-img' />
                            </Col>
                            <Col md={6} sm={12} className='mb-3 p-3'>
                                <h3>Portfolio Website (React)</h3>
                                <p className='fs-5'>
                                    My personal portfolio website built with React and Bootstrap, featuring smooth
                                    scrolling, custom styling, and a working contact form using EmailJS integration.
                                </p>
                                <div className='project-buttons'>
                                    <a href='https://github.com/pratikroxx91/portfolio' target='_blank' rel='noreferrer'>
                                        <Button variant='outline-light' size='lg'>
                                            GitHub
                                        </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="text-center mt-5">
                        <p className="fs-5">
                            You can also check out my experimental mini-project{" "}
                            <a
                                href="https://github.com/pratikroxx91/landscaping-services-webpage/tree/main/Landscaping%20Project%20with%20Bootstrap%205"
                                target="_blank"
                                rel="noreferrer"
                                className="text-success fw-semibold"
                            >
                                here
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    )
}

export default Projects
