import React from 'react'
import profile_img from '../../assets/profile_img.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <section id='home'>
            <div className='hero p-3'>
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-12 mb-3 p-3">
                            <img id='hero-img' src={profile_img} />
                        </div>
                        <div className="col-12 mb-3 p-3">
                            <h1>Hi! I'm <span className='cName'>Pratik Roy</span>, a 34 year-old aspiring frontend developer based in Kolkata, India</h1>
                        </div>
                        <div className="hero-action text-center">
                            <a href="../../public/pratik_resume.pdf" download><button type="button" className="btn px-3 py-2">Download Résumé</button></a>
                            <a href="https://drive.google.com/file/d/1viIUhvEbf2Fe6o7o8O790INaqGmkFkRV/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button type="button" className="btn px-3 py-2">View My Résumé</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    )
}

export default Hero