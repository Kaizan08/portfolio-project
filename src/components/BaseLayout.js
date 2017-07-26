import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/App.css';

class BaseLayout extends Component {
    render() {
        return (
            <div>
                <nav className="App-header">
                    <Link to="/">
                    <img className="App-logo" src="../favicon.ico" alt="react"/></Link>
                    <ul className="nav navbar-nav unl">
                        <li>
                            <Link className="Links" to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="Links" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="Links" to="/portfolio">Portfolio</Link>
                        </li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

export default BaseLayout;