import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-dark text-white text-center py-4">
                <div>
                    <p className="mb-1">Designed & built by Pratik</p>
                    <p className="mb-1">© {new Date().getFullYear()} All rights reserved</p>
                    <div className="social-links mt-2">
                        <a href="https://github.com/pratikroxx91" target="_blank" rel="noopener noreferrer" className="mx-2 text-white">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/pratik-roy-73243774/" target="_blank" rel="noopener noreferrer" className="mx-2 text-white">
                            LinkedIn
                        </a>
                        <a href="mailto:roypratik1991@gmail.com" className="mx-2 text-white">
                            Email
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
