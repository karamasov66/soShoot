import React, {Component} from 'react';
import Gallery from './Gallery';

class Animal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        photos: []
      }
    }
    
    componentDidMount() {
      fetch('api/categories/animal')
          .then(response => {
              return response.json();
        })
          .then(photos => {
              this.setState({photos})
        });
    }
    
    render() {
      return (
        <Gallery photos={this.state.photos} />
      )
    }
    
}

export default Animal;