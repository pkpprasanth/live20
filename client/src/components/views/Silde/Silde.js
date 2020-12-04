import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
class Silde extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="./img.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./img.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./img.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
export default Silde
