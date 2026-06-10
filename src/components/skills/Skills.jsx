import React from 'react';
import './Skills.css'

const skillCategories = [
    {
        id: 1,
        title: "Core & Backend",
        items: ["JavaScript (ES6+)", "Node.js", "Express.js", "REST APIs", "Asynchronous Programming"]
    },
    {
        id: 2,
        title: "Database Management",
        items: ["MongoDB", "Mongoose ODM", "CRUD Operations", "Aggregation Pipelines", "Database Security"]
    },
    {
        id: 3,
        title: "Development Tools",
        items: ["Git / GitHub", "Postman (API Testing)", "npm", "Vite", "Environment Variables"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>

                <div className="skills-grid">
                    {skillCategories.map((category) => (
                        <div key={category.id} className="skills-category-card">
                            <h3 className="category-title">{category.title}</h3>
                            <ul className="skills-list">
                                {category.items.map((skill, index) => (
                                    <li key={index} className="skill-item">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
