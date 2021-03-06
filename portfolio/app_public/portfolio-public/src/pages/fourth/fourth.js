import React from "react";
import './fourth.scss';

const Fourth = () => {
    return(
        <section className="fourth-wrap" id="projects">
            <div className="grid">
                <h3>Projects</h3>
                <div className="proj-wrap">
                    <div className="proj">
                        <h4>Asian Crane Service</h4>
                        <a href="https://asiancraneservices.in/" target="_blank"><img src="images/acs-website.jpg" alt="asian-crane-service-website" /></a>
                    </div>
                    <div className="proj">
                        <h4>Capstone Project</h4>
                        <a href="https://crackexpense.me/" target="_blank"><img src="images/crk-exp.jpg" alt="crack-expense-website" /></a>
                    </div>
                    <div className="proj">
                        <h4>Image Gallery</h4>
                        <a href="https://img-app.000webhostapp.com/" target="_blank"><img src="images/img-gallry.jpg" alt="image-gallery" /></a>
                    </div>
                    <div className="proj">
                        <h4>PDT Website</h4>
                        <a href="https://pdts-projct.000webhostapp.com/" target="_blank"><img src="images/pdt-website.jpg" alt="pdt-website" /></a>
                    </div>
                    <div className="proj">
                        <h4>Utility Dashboard</h4>
                        <a href="https://js-dashboard.000webhostapp.com/" target="_blank"><img src="images/dashboard.jpg" alt="dashboard" /></a>
                    </div>
                    <div className="proj">
                        <h4>Find The Penguins Game</h4>
                        <a href="https://ftp-game.000webhostapp.com/" target="_blank"><img src="images/ftp-game.jpg" alt="ftp-game" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Fourth;