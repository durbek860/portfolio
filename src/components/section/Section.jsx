import React from 'react';
import './Section.css'

export default function Section() {
    return (
        <section id="about" className="main-content">
            <div className="container">
                <h1 className="hero-title">Full-Stack Developer</h1>
                <p className="hero-subtitle">
                    Hi, my name is Durbek and I am a Full-Stack Developer. I build web applications from scratch, focusing on efficient backend logic and responsive user interfaces
                </p>
                <a href="#contacts" className="btn">Contact Me</a>
            </div>
        </section>
    );
}