import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import '../assets/css/skills.scss';

export default class Skills extends Component{
    render(){
        return (
            <div className="skills innerpage">
                <h2 className="heading">
                    <span className="sign">&lt;</span>
                    <span className="txt">Skills</span>
                    <span className="sign"> /&gt;</span>
                </h2>
                <Zoom>
                <div className="content">
                    <span className="skill skill1">HTML5</span>
                    <span className="skill skill2">CSS3</span>
                    <span className="skill skill3">JQuery</span>
                    <span className="skill skill4">Javascript</span>
                    <span className="skill skill7">Git</span>
                    <span className="skill skill6">Bootstrap</span>
                    <span className="skill skill8">SCSS</span>
                    <span className="skill skill10">Photoshop</span>
                    <span className="skill skill5">React</span>
                    <span className="skill skill9">PHP</span>
                </div>
                </Zoom>
                <Link className="btn" to="/profile/contact">View More</Link>
            </div>
        )
    }
}