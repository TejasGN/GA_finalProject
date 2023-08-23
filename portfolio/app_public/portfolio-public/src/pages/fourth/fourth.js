import React from "react";
import './fourth.scss';

const Fourth = () => {
    return(
        <section className="fourth-wrap" id="projects">
            <div className="grid">
                <h3>Personal Projects</h3>
                <div className="proj-wrap">
                    <div className="proj">
                        <h4>YouTube Clone</h4>
                        <a href="https://main--clever-faloodeh-e86ded.netlify.app/" target="_blank"><img src="images/youtube-clone.jpg" alt="youtube-clone-website" /></a>
                    </div>
                    <div className="proj">
                        <h4>Asian Crane Service</h4>
                        <a href="https://asiancraneservices.in/" target="_blank"><img src="images/acs-website.jpg" alt="asian-crane-service-website" /></a>
                    </div>
                    <div className="proj">
                        <h4>Wedding Website</h4>
                        <a href="https://vishwasandbharati.bond/" target="_blank"><img src="images/wedding-website.jpg" alt="wedding-website" /></a>
                    </div>
                    <div className="proj">
                        <h4>Image Gallery</h4>
                        <a href="https://cozy-panda-761004.netlify.app/" target="_blank"><img src="images/img-gallry.jpg" alt="image-gallery" /></a>
                    </div>
                    <div className="proj">
                        <h4>Utility Dashboard</h4>
                        <a href="https://loquacious-basbousa-01f8b4.netlify.app/" target="_blank"><img src="images/dashboard.jpg" alt="dashboard" /></a>
                    </div>
                    <div className="proj">
                        <h4>Find The Penguins Game</h4>
                        <a href="https://effervescent-marigold-0d0e53.netlify.app/" target="_blank"><img src="images/ftp-game.jpg" alt="ftp-game" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Fourth;