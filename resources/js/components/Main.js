import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

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
    
    renderCategories(){
        return this.state.categories.map(category => {
            return (
                <li key={category.id} >
                    { category.name }
                </li>
            )
        })
    }
    
    render() {
        let backdrop;
        
        if (this.state.sideDrawerOpen){
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }
        return (
            <div>
                {backdrop}
                <SideDrawer show={this.state.sideDrawerOpen}/>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <div style={{marginTop: '60px'}}>
                    <ul>
                     {this.renderPhotos()}
                    </ul>
                </div>
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