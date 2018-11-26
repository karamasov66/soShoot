import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    
    renderCategories(){
        return this.props.categories.map(category => {
          let path = '/'+category.name;

            return (
                <li key={category.id} >
                    <Link
                        to={path}
                        className={`nav-link ${this.props.location.pathname === '/{category.name}' ? 'active' : ''}`}
                    >
                        {category.name}
                    </Link>
                </li>
            )
        })
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
                              <li><a href="#">Home</a></li>
                              {this.renderCategories()}
                              <li><a href="#">Bio</a></li>
                              <li><a href="#">Contact</a></li>
                          </ul>
                      </div>
              </nav>
          </header>
        );
    }
}

export default Toolbar;