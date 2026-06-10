import React from 'react';
import './Footer.css'

const socialLinks = [
    { id: 1, name: 'Telegram', url: 'https://t.me/DURBEK_860', label: '@DURBEK_860' },
    { id: 2, name: 'GitHub', url: 'https://github.com/durbek860', label: '://github.com' },
    { id: 3, name: 'Email', url: 'mailto:50p092bb@gmail.com', label: '50p092bb@gmail.com' }
];

export default function Contact() {
    return (
        <footer id="contacts" className="footer-section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <p className="footer-subtitle">
                    Based in Uzbekistan. Open for internships, junior positions, and interesting backend development projects. Let's connect!
                </p>

                <div className="contacts-grid">
                    {socialLinks.map((link) => (
                        <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-card">
                            <span className="contact-platform">{link.name}</span>
                            <span className="contact-value">{link.label} →</span>
                        </a>
                    ))}
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Durbek | Powered by Node.js & React</p>
                </div>
            </div>
        </footer>
    );
}
