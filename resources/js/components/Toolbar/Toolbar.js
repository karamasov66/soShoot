import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
          <header className="toolbar">
              <nav className="toolbar-nav">
                <div className="toolbar-toggle-button">
                    <DrawerToggleButton click={this.props.drawerClickHandler}/>
                </div>
                  <div className="toolbar-logo">
                      <a href="/">Logo</a>
                  </div>
                      <div className="toolbar-items">
                          <ul>
                              <li><a href="/">Home</a></li>
                              <li><a href="/">Landscape</a></li>
                              <li><a href="/">Animaux</a></li>
                              <li><a href="/">Portraits</a></li>
                              <li><a href="/">Bio</a></li>
                              <li><a href="/">Contact</a></li>
                          </ul>
                      </div>
              </nav>
          </header>
        );
    }
}

export default Toolbar;