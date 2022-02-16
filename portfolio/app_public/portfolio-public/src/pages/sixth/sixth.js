import React from "react";
import './sixth.scss';
import axios from 'axios';

class Sixth extends React.Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDetails = this.onChangeDetails.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            details: '',
            msg: '',
            msgClass: 'msg'
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangeDetails(e){
        this.setState({
            details: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const userData = {
            name: this.state.name,
            email: this.state.email,
            details: this.state.details
        };

        axios.get('http://localhost:3000/api/collectlist')
            .then(res => {
                // console.log(res.data);
                const found = res.data.some(el => el.email === userData.email);
                if(found){
                    this.setState({
                        msg: "Sorry for delay! I'll contact you shortly.",
                        msgClass: "msg err"
                    });
                }
                else{
                    console.log("enter");
                    axios.post('http://localhost:3000/api/collectlist', userData)
                        .then(res => {
                            this.setState({
                                msg: "Thank you! I'll contact you shortly.",
                                msgClass: "msg success"
                            });
                        });
                }
            });
    }

    render(){
        return(
            <section className="sixth-wrap">
                <div className="grid">
                    <h5>I am always excited work on some awesome projects, message me and let's discuss.</h5>
                    <h6>Write a message for me:</h6>
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label><span>Your Name: </span><input type="text" name="name" value={this.state.name} onChange={this.onChangeName} required></input></label>
                            <label><span>Email: </span><input type="email" name="email" value={this.state.email} onChange={this.onChangeEmail} required></input></label>
                        </p>
                        <p>
                            <label><span>Message: </span><textarea name="details" value={this.state.details} onChange={this.onChangeDetails} required></textarea></label>
                        </p>
                        <p>
                            <input type="submit" value="Submit"></input>
                        </p>
                    </form>
                    <p className={this.state.msgClass}>{this.state.msg}</p>
                </div>
            </section>
        );
    }
}

export default Sixth;