import React from "react";
import './first.scss';

class First extends React.Component{
    render(){
        return(
            <section className="atf-wrap">
                <header>
                    <div className="head-wrap">
                        <div className="grid">
                            <ul>
                                <li><a className="abt-lnk">About</a></li>
                                <li><a className="skl-lnk">Skills</a></li>
                                <li><a className="prj-lnk">Projects</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className="first-wrap">
                    <div className="grid">
                        <div className="after-wrap">
                            <div className="cent-wrap">
                                <img src="images/plane.gif" alt="plane-gif" />
                                <h1>Tejas Nashikkar</h1>
                                <h2 className="line2"><span>I am</span> <b className="hidden">a web developer.</b></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default First;