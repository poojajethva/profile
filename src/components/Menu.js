import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/menu.scss';

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.menuRef = React.createRef();
        this.menuToggleRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    toggleMenu(){
        let menu = this.menuRef.current,
            toggle = this.menuToggleRef.current;
            console.log(menu, toggle);

            toggle.classList.toggle("menu-open");
            menu.classList.toggle("active");
    }

    hideMenu(){
        let menu = this.menuRef.current,
            toggle = this.menuToggleRef.current;
            console.log(menu, toggle);

            toggle.classList.remove("menu-open");
            menu.classList.remove("active");
    }

    handleClick(e){
        if(!this.node.contains(e.target)){
            this.hideMenu();
        }
    }

    render(){
        return (
                <nav role="navigation" ref={node => this.node = node}>
                    <div className="menu-toggle" ref={this.menuToggleRef} onClick={this.toggleMenu.bind(this)}><span>Menu</span></div>
                    <ul className="menu" ref={this.menuRef}>
                        <li><NavLink to="/" exact activeClassName="active" onClick={this.hideMenu.bind(this)}><span>Home</span></NavLink></li>
                        <li><NavLink to="/about" activeClassName="active" onClick={this.hideMenu.bind(this)}><span>About</span></NavLink></li>
                        <li><NavLink to="/skills" activeClassName="active" onClick={this.hideMenu.bind(this)}><span>Skills</span></NavLink></li>
                        <li><NavLink to="/experience" activeClassName="active" onClick={this.hideMenu.bind(this)}><span>Experience</span></NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active" onClick={this.hideMenu.bind(this)}><span>Contact</span></NavLink></li>
                    </ul>
                </nav>
        );
    }
}    
    