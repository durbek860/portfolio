import React from 'react';
import './Section.css'

export default function Section() {
    return (
        <section id="about" className="main-content">
            <div className="container">
                <h1 className="hero-title">Full-Stack Developer</h1>
                <p className="hero-subtitle">
                    Deep diving into asynchronous JavaScript, building server-side logic with Node.js, and structuring data using MongoDB.
                </p>
                <a href="#contacts" className="btn">Contact Me</a>
            </div>
        </section>
    );
}