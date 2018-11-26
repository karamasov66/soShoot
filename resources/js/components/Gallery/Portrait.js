import React, {Component} from 'react';
import Gallery from './Gallery';

class Portrait extends Component {
    constructor(props) {
      super(props);
      this.state = {
        photos: []
      }
    }
    
    componentDidMount() {
      fetch('api/categories/portrait')
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

export default Portrait;