import React from "react";
import First from './first/first';
import Second from './second/second';
import Third from './third/third';
import Fourth from './fourth/fourth';
import Fifth from './fifth/fifth';
import Sixth from './sixth/sixth';
import Footer from './footer/footer';

class Home extends React.Component{
    render(){
        return(
            <div className="parent-wrap">
                <First />
                <Second />
                <Third />
                <Fourth />
                <Fifth />
                <Sixth />
                <Footer />
            </div>
        )
    }
}

export default Home;