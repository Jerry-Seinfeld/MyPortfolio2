import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div>
        <footer className="footer is-primary">
        <div className="container">
        <div className="columns">
        <div className="columns">
            <p>And this right here is a spiffy footer</p>
            <div className="column has-text-right">
            <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
            <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
         </footer>
    </div>

        );
    };
    
    export default Footer;
