import React from "react";
import './third.scss';

class Third extends React.Component{
    render(){
        return(
            <section className="third-wrap" id="skills">
                <div className="grid">
                    <h3>Skills</h3>
                    <div className="skill-wrap">
                        <div className="skillbar" data-percent="80%">
                            <div className="skillbar-title"><span>Javascript</span></div>
                            <div className="skillbar-bar"></div>
                            <div className="skill-bar-percent">80%</div>
                        </div>
                        <div className="skillbar" data-percent="75%">
                            <div className="skillbar-title"><span>ReactJS</span></div>
                            <div className="skillbar-bar"></div>
                            <div className="skill-bar-percent">75%</div>
                        </div>
                        <div className="skillbar" data-percent="95%">
                            <div className="skillbar-title"><span>HTML5</span></div>
                            <div className="skillbar-bar"></div>
                            <div className="skill-bar-percent">95%</div>
                        </div>
                        <div className="skillbar" data-percent="95%">
                            <div className="skillbar-title"><span>CSS3</span></div>
                            <div className="skillbar-bar"></div>
                            <div className="skill-bar-percent">95%</div>
                        </div>
                        <div className="skillbar" data-percent="65%">
                            <div className="skillbar-title"><span>JAVA</span></div>
                            <div className="skillbar-bar"></div>
                            <div className="skill-bar-percent">65%</div>
                        </div>
                        <div className="othr-skill-wrap">
                            <div className="inner-wrap">
                                <ul>
                                    <li>AngularJS</li>
                                    <li>Wordpress</li>
                                    <li>Sitecore</li>
                                    <li>SCSS &amp; LESS</li>
                                </ul>
                                <ul>
                                    <li>MEAN/MERN</li>
                                    <li>SQL</li>
                                    <li>D3 JS</li>
                                    <li>PHP</li>
                                </ul>
                                <ul>
                                    <li>Visual Studio Code</li>
                                    <li>Android Studio</li>
                                    <li>Invision</li>
                                    <li>Zeplin</li>
                                </ul>
                                <ul>
                                    <li>AWS</li>
                                    <li>GULP</li>
                                    <li>Git</li>
                                    <li>Mustache</li>
                                </ul>
                            </div>
                        </div>
                        <div className="dwnld-wrap">
                            <p>Download my Resume</p>
                            <a className="dwnld-btn" href="./assets/TejasNashikkar_Resume.pdf" download><img src="images/download.png" alt="download-button" /></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Third;