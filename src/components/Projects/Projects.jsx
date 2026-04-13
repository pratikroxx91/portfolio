import React from 'react'
import './Projects.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import portfolio from '../../assets/portfolio-shot.JPG'
import portal from '../../assets/wbsedcl.jpg'
import saas from '../../assets/saas_website.jpg'
import weatherApp from '../../assets/weatherApp.jpg'
import dashboardshot from '../../assets/dashboardshot.jpg'


const Projects = () => {
    return (
        <section id='projects'>
            <div className='projects p-3'>
                <div className='container'>
                    <h1 className='text-center mb-5'>Projects</h1>
                    <h2 className='text-center mb-5'>UI/UX Design</h2>
                    <Container>
                        <Row className='align-items-center my-5 flex-md-row-reverse'>
                            <Col md={6} sm={12} className='mb-3 p-3 text-center'>
                                <img src={portfolio} alt='Portfolio UX Design' className='project-img' />
                            </Col>

                            <Col md={6} sm={12} className='mb-3 px-5'>
                                <h3>Portfolio Website Redesign</h3>

                                <p className='fs-6'>
                                    A UX-focused redesign of a developer portfolio aimed at improving readability,
                                    visual hierarchy, and project discoverability. The project includes wireframes,
                                    design system exploration, and responsive UI layouts created in Figma.
                                </p>

                                <div className='project-buttons'>

                                    <a href='https://www.behance.net/gallery/247047651/UIUX-Developer-Portfolio' target='_blank' rel='noreferrer'>
                                        <Button variant='outline-success' size='lg' className='me-3'>
                                            Behance
                                        </Button>
                                    </a>

                                    <a href='https://www.figma.com/design/SH3O1PBT1UYtNAnUnOGvEM/Portfolio?node-id=0-1&t=4I43YzPTLbP2ki15-1' target='_blank' rel='noreferrer'>
                                        <Button variant='outline-light' size='lg'>
                                            Figma Prototype
                                        </Button>
                                    </a>

                                </div>
                            </Col>
                        </Row>

                        <Row className='align-items-center my-5 flex-md-row-reverse'>
                            <Col md={6} sm={12} className='mb-3 px-5'>
                                <h3>WBSEDCL Portal Redesign</h3>

                                <p className='fs-6'>
                                    Designed a UI/UX redesign of a state electricity board portal, focusing on improving navigation, readability, and overall usability by simplifying layout structure and enhancing user interaction across key sections.
                                </p>

                                <div className='project-buttons'>

                                    <a href='https://www.behance.net/gallery/247486961/WBSEDCL-Portal-Redesign' target='_blank' rel='noreferrer'>
                                        <Button variant='outline-success' size='lg' className='me-3'>
                                            Behance
                                        </Button>
                                    </a>

                                    <a href='https://www.figma.com/design/UGUf9jRThvezOUmlukrfre/Untitled?node-id=0-1&p=f&t=ojZqnWamrDNkQL6c-0' target='_blank' rel='noreferrer'>
                                        <Button variant='outline-light' size='lg'>
                                            Figma Prototype
                                        </Button>
                                    </a>
                                </div>
                            </Col>
                            <Col md={6} sm={12} className='mb-3 p-3 text-center'>
                                <img src={portal} alt='cleaning website' className='project-img' />
                            </Col>
                        </Row>
                    </Container>


                    <h2 className='text-center mb-5'>Frontend Development</h2>
                    <Container>
                        <Row className='align-items-center my-5 flex-md-row-reverse'>
                            <Col md={6} sm={12} className='mb-3 p-3 text-center'>
                                <img src={dashboardshot} alt='Portfolio Website' className='project-img' />
                            </Col>
                            <Col md={6} sm={12} className='mb-3 px-5'>
                                <h3>Dashboard UI (React)</h3>
                                <p className='fs-6'>
                                    Responsive analytics dashboard built with React and Vite, styled using Tailwind CSS, featuring reusable components and interactive charts powered by Recharts to visualize key metrics and improve UI-driven decision making.
                                </p>
                                <div className='project-buttons'>
                                    <a href='https://circlesoft-dashboard.netlify.app/' target='_blank' rel='noreferrer'>
                                        <Button variant='outline-success' size='lg' className='me-3'>
                                            Live Demo
                                        </Button>
                                    </a>
                                    <a href='https://github.com/pratikroxx91/CircleSoft-Dashboard-UI' target='_blank' rel='noreferrer'>
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
                            <Col md={6} sm={12} className='mb-3 px-5'>
                                <h3>Weather App (React)</h3>
                                <p className='fs-6'>
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
                                <img src={saas} alt='Portfolio Website' className='project-img' />
                            </Col>
                            <Col md={6} sm={12} className='mb-3 px-5'>
                                <h3>SaaS Landing Page (React)</h3>
                                <p className='fs-6'>
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

                    </Container>

                </div>
            </div>
            <hr />
        </section>
    )
}

export default Projects
