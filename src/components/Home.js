import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/home.scss';

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.magicRef = React.createRef();
        this.state = {
            values:{ left: 0, top: 0}
        };
    }
    moveMagicBg(e){
        let magicWHalf = this.magicRef.current;
        magicWHalf = magicWHalf.offsetWidth / 2;
        this.setState({
            values:{
                left: e.pageX - magicWHalf,
                top: e.pageY - magicWHalf
            }
        })
    }
    
    render(){
        return (
            <div className="home" onMouseMove={this.moveMagicBg.bind(this)}>
            <div className="magic" ref={this.magicRef} style={this.state.values}></div>
            <div className="content">
            <p className="line line1">
            Hi, I’m&nbsp;<span className="sign">&lt;</span>
            <span className="txt">Pooja Jethva</span>
            <span className="sign"> /&gt;</span>;
            </p>
            <p className="line line2">
            I’m a <span className="txt2">UI Developer</span>.
            <span className="cursor">|</span>
            </p>
            </div>
            <Link className="btnHome" to="/about">View More</Link>
            </div>
            )
        }
    }