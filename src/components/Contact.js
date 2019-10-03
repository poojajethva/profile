import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/contact.scss';
import Zoom from 'react-reveal/Zoom';

export default class Contact extends Component{
    render(){
        return (
                <div key="contact" className="contact innerpage">
                    <h2 className="heading">
                        <span className="sign">&lt;</span>
                        <span className="txt">Contact</span>
                        <span className="sign"> /&gt;</span>
                    </h2>
                    <Zoom>
                    <div className="content">
                        <p>
                            For any query email me at <br />
                            <a className="maillink" href="mailto:pooja.d.jethva@gmail.com">pooja.d.jethva@gmail.com</a>
                        </p>
                        <p className="buttons">
                            <a className="btn social" href="https://www.linkedin.com/in/pooja-jethva/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a className="btn social" href="https://github.com/poojajethva" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </p>
                    </div>
                    </Zoom>
                    <Link className="btn" to="/">Go Back</Link>
                </div>
        )
    }
}