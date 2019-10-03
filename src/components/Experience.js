import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import '../assets/css/exp.scss';

export default class Experience extends Component{
    render(){
        return (
            <div className="experience innerpage">
                <h2 className="heading">
                    <span className="sign">&lt;</span>
                    <span className="txt">Experience</span>
                    <span className="sign"> /&gt;</span>
                </h2>
                <Zoom>
                <div className="content">
                    <ul>
                        <li className="left">
                            <p>Media.net <br />as UI Developer <br />Working since 2014 till present</p>
                        </li>
                        <li className="right">
                            <p>Velocity Consultancy as Web Designer <br />Worked for 1 year</p>
                        </li>
                        <li className="left">
                            <p>Web Designer <br />Diploma Course, <br />Arena Animation</p>
                        </li>
                        <li className="right">
                            <p>B.Sc.IT, <br />Usha Pravin Gandhi College of Management</p>
                        </li>
                    </ul>
                </div>
                </Zoom>
                <Link className="btn" to="/profile/skills">View More</Link>
            </div>
        )
    }
}