import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

export default class About extends Component{
    render(){
        return (
            <div className="about innerpage">
                <h2 className="heading">
                    <span className="sign">&lt;</span>
                    <span className="txt">About</span>
                    <span className="sign"> /&gt;</span>
                </h2>
                <Zoom>
                <div className="content">
                    <p><span className="txt">I am UI Developer</span> at an Ad-Tech company based in Mumbai. I thoroughly enjoy my work by transforming beautiful design into interactive web pages.</p>
                    <p><span className="txt">I have successfully</span> grabbed and delivered a few freelancing work as well.</p>
                    <p><span className="txt">When I am not coding / </span>designing, I like traveling, painting, cycling, crafting and watching movies.</p>
                </div>
                </Zoom>
                <Link className="btn" to="/experience">View More</Link>
            </div>
        )
    }
}