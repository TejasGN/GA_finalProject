import React from "react";
import './second.scss';
import ScrollIntoView from 'react-scroll-into-view';

const Second = () => {
    return(
        <section className="second-wrap" id="about">
            <div className="grid">
                <div className="abt-wrap">
                    <div className="left-wrap">
                        <img src="images/TejasNashikkar-img.jpg" className="me-img" alt="Tejas Nashikkar - software developer" />
                        <div className="social-wrap">
                            <a href="https://www.facebook.com/tejas.nashikkar7/" target="_blank"><img src="images/fb.png" alt="facebook-img" /></a>
                            <a href="https://www.linkedin.com/in/tejas-nashikkar-60b5b4155" target="_blank"><img src="images/linkedin.png" alt="linkedin-img" /></a>
                            <a href="https://www.instagram.com/invites/contact/?i=za9tatt7fvgz&utm_content=ai1n7x" target="_blank"><img src="images/insta.png" alt="instagram-img" /></a>
                            <a href="mailto:nashikkar.tejas@gmail.com"><img src="images/gmail.png" alt="gmail-img" /></a>
                        </div>
                    </div>
                    <div className="right-wrap">
                        <h3>About me</h3>
                        <div className="desc-txt">Hi, I am Tejas Nashikkar, a Frontend Developer living in <a href="https://www.google.com/maps/place/Kitchener,+ON/@43.4303489,-80.6163987,11z/data=!3m1!4b1!4m5!3m4!1s0x882bf48c03ee5105:0x9525f8e6df5f544b!8m2!3d43.4516395!4d-80.4925337" target="_blank">Kitchener, Ontario Canada</a>. I am a Computer Science Engineer and a post graduate in Web Design and Development. I have experience of working in React, Angular and AngularJS frameworks for the frontend and also non-relational database like MongoDB.</div>
                        <div className="desc-txt">Have a look at my profile on <a href="https://www.linkedin.com/in/tejas-nashikkar-60b5b4155" target="_blank">LinkedIn</a>, <ScrollIntoView selector="#dwnld-resume" className="dwnld-lnk"><a>download</a></ScrollIntoView> my resume below, or just drop me an <a href="mailto:nashikkar.tejas@gmail.com">email</a>. I am always excited to work with like minded people.</div>
                    </div>
                </div>
                <hr className="sep" />
                <div className="nums-wrap">
                    <div className="num">
                        <h4 className="count" data-count="97000">0</h4>
                        <p>lines of code</p>
                    </div>
                    <div className="num">
                        <h4 className="count" data-count="70945702">0</h4>
                        <p>pixels rendered</p>
                    </div>
                    <div className="num">
                        <h4 className="count" data-count="5570">0</h4>
                        <p>hours Dota2 played</p>
                    </div>
                    <div className="num">
                        <h4 className="count" data-count="5">0</h4>
                        <p>years of experience</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Second;