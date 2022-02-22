import React from "react";
import './second.scss';

class Second extends React.Component{
    render(){
        return(
            <section className="second-wrap" id="about">
                <div className="grid">
                    <div className="abt-wrap">
                        <div className="left-wrap">
                            <img src="images/TejasNashikkar_img.jpg" alt="TejasNashikkar_img" className="me-img" />
                            <div className="social-wrap">
                                <a href="https://www.facebook.com/tejas.nashikkar7/" target="_blank"><img src="images/fb.png" /></a>
                                <a href="https://www.linkedin.com/in/tejas-nashikkar-60b5b4155" target="_blank"><img src="images/linkedin.png" /></a>
                                <a href="https://www.instagram.com/invites/contact/?i=za9tatt7fvgz&utm_content=ai1n7x" target="_blank"><img src="images/insta.png" /></a>
                                <a href="mailto:nashikkar.tejas@gmail.com"><img src="images/gmail.png" /></a>
                            </div>
                        </div>
                        <div className="right-wrap">
                            <h3>About me</h3>
                            <p>Hi, I am Tejas Nashikkar, a 31 year old Web Developer living in <a href="https://www.google.com/maps/place/Kitchener,+ON/@43.4303489,-80.6163987,11z/data=!3m1!4b1!4m5!3m4!1s0x882bf48c03ee5105:0x9525f8e6df5f544b!8m2!3d43.4516395!4d-80.4925337" target="_blank">Kitechener, Ontario Canada</a>. I am a Computer Science Engineer and currently pursuing post graduation in Web Development. I was working as a Senior UI Developer at <a href="https://www.media.net/" target="_blank">Media.net</a> with a total experience of 5 years.</p>
                            <p>Have a look at my profile on <a href="https://www.linkedin.com/in/tejas-nashikkar-60b5b4155" target="_blank">linkedin</a>, <a className="to-resume">download</a> my resume below, or just drop me an <a href="mailto:nashikkar.tejas@gmail.com">email</a>. I am always excited to work with like minded people.</p>
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
    }
}

export default Second;