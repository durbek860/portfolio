import React from 'react';
import './Skills.css'
import img1 from "./9632880-removebg-preview.png"
import img2 from "./css-removebg-preview.png"
import img3 from "./Git_icon.svg.png"
import img4 from "./images__1-removebg-preview.png"
import img5 from "./images-removebg-preview.png"
import img6 from "./javascript-logo-javascript-icon-transparent-free-png.webp"
import img7 from "./png-transparent-html-html-logo-html-5-html-five-logo-html-5-logo-programming-langugae-3d-icon-thumbnail-removebg-preview.png"
import img8 from "./react-removebg-preview.png"
import img9 from "./scss-removebg-preview.png"
import img10 from "./axios.png"
import img11 from "./redux-toolkit-removebg-preview.png"

const techs = [
    {
        img: img1,
        title: "redux"
    },
    {
        img: img2,
        title: "css"
    },
    {
        img: img7,
        title: "html"
    },
    {
        img: img6,
        title: "JavaScript"
    },
    {
        img: img3,
        title: "git"
    },
    {
        img: img4,
        title: "MongoDB"
    },
    {
        img: img5,
        title: "node.js"
    },
    {
        img: img8,
        title: "react"
    },
    {
        img: img9,
        title: "scss"
    },
    {
        img: img10,
        title: "axios"
    },
    {
        img: img11,
        title: "redux toolkit"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>

                <div className="skills-grid">
                    {
                        techs.map((item,index) => (
                            <div key={index} className="tech">
                                <img src={item.img} alt={item.title} title={item.title} />
                                <h4>{item.title}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
