import React from 'react';
import './Footer.css';

/**
 * Footer Component
 * 
 * @param {Array} links - Array of { label, href }
 * @param {string} copyright - Copyright text
 * @param {string} os - PC (default) | Mobile
 * @param {string} className - Extra classes
 */
const Footer = ({
    links = [],
    copyright = '© LY Corporation',
    os = 'PC',
    className = '',
    ...props
}) => {
    const isMobile = os.toLowerCase() === 'mobile';

    const classNames = [
        'footer',
        isMobile ? 'footer-mobile' : 'footer-pc',
        className
    ].filter(Boolean).join(' ');

    return (
        <footer className={classNames} {...props}>
            {!isMobile && (
                <p className="footer-copyright">{copyright}</p>
            )}

            <div className="footer-links">
                {links.map((link, index) => (
                    <React.Fragment key={index}>
                        <a href={link.href || '#'} className="footer-link">
                            {link.label}
                        </a>
                        {index < links.length - 1 && (
                            <div className="footer-divider" aria-hidden="true" />
                        )}
                    </React.Fragment>
                ))}
            </div>

            {isMobile && (
                <p className="footer-copyright">{copyright}</p>
            )}
        </footer>
    );
};

export default Footer;
