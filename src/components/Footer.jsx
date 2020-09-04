import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <footer className="bg-light text-center mb-0">
                <p> © {year} Audichya Services. All Rights Reserved | Terms and Conditions </p>
            </footer>
        </>
    );
};

export default Footer;
