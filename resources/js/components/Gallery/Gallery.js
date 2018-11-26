import React, { Component } from 'react';

import ReactGallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import {get} from 'axios';


class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            images : [],
            currentImage: 0,
            lightboxIsOpen: false
        };
    }
    
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
 
    render() {

        let photos = this.props.photos.map(photo => {
            return {
                src : '/images/' + photo.uri,
                width : photo.width,
                height : photo.height,
                id :  photo.id
            }
        });
        return (
            <div className="gallery">
                {this.props.photos.length ?
                    <ReactGallery
                        photos={photos}
                        onClick={this.openLightbox.bind(this)}
                    />
                    :
                    <div className="no-images">
                        <h5 className="text-center">
                            You currently have no images in your photos gallery
                        </h5>
                    </div>
                }
 
                <Lightbox images={photos}
                          onClose={this.closeLightbox.bind(this)}
                          onClickPrev={this.gotoPrevious.bind(this)}
                          onClickNext={this.gotoNext.bind(this)}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}/>
            </div>
 
        );
    }
}

export default Gallery;