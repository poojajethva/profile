import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/menu.scss';

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    toggleMenu(){
        let menu = document.querySelector(".menu"),
            toggle = document.querySelector(".menu-toggle");

            toggle.classList.toggle("menu-open");
            menu.classList.toggle("active");
    }

    hideMenu(){
        let menu = document.querySelector(".menu"),
            toggle = document.querySelector(".menu-toggle");

            toggle.classList.remove("menu-open");
            menu.classList.remove("active");
    }

    componentWillMount(){
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick(e){
        if(!this.node.contains(e.target)){
            this.hideMenu();
        }
    }

    render(){
        return (
                <nav role="navigation" ref={node => this.node = node}>
                    <div className="menu-toggle" onClick={this.toggleMenu.bind(this)}><span>Menu</span></div>
                    <ul className="menu">
                        <li><NavLink to="profile/" exact activeClassName="active" onClick={this.hideMenu.bind(this)}><span>Home</span></NavLink></li>
                        <li><NavLink to="profile/about" activeClassName="active" onClick={this.hideMenu.bind(this)}><span>About</span></NavLink></li>
                        <li><NavLink to="profile/skills" activeClassName="active" onClick={this.hideMenu.bind(this)}><span>Skills</span></NavLink></li>
                        <li><NavLink to="profile/experience" activeClassName="active" onClick={this.hideMenu.bind(this)}><span>Experience</span></NavLink></li>
                        <li><NavLink to="profile/contact" activeClassName="active" onClick={this.hideMenu.bind(this)}><span>Contact</span></NavLink></li>
                    </ul>
                </nav>
        );
    }
}    
    