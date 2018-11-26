import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Landscape from './Gallery/Landscape';
import Animal from './Gallery/Animal';
import Portrait from './Gallery/Portrait';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            sideDrawerOpen: false,
            photos: [],
            categories: []
        }
    }
    
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
      });
    };
    
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }
    
    componentDidMount() {
        fetch('api/photos')
          .then(response => {
              return response.json();
        })
          .then(photos => {
              this.setState({photos})
        });
        fetch('api/categories')
          .then(response => {
              return response.json();
        })
          .then(categories => {
              this.setState({categories})
        })
    }
    
    renderPhotos() {
        return this.state.photos.map(photo => {
            return (
                <li key={photo.id} >
                    { photo.title }
                </li>
            );
        })
    }
    
    render() {
        let backdrop;
        
        if (this.state.sideDrawerOpen){
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }
        return (
            <div>
                <BrowserRouter>
                    <Fragment>
                        {backdrop}
                        <Route path='/' render={(props) => (
                            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} categories={this.state.categories} {...props}/>
                        )}/>
                        <Route exact path="/landscape" component={Landscape}/>
                        <Route exact path="/portrait" component={Portrait}/>
                        <Route exact path="/animal" component={Animal}/>
                        <SideDrawer show={this.state.sideDrawerOpen}/>
                    </Fragment>
                </BrowserRouter>
                
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}