import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles 
import { img } from './img/data';
import classes from "../Carousel/Carousel.module.css";

function CarouselEffect() {
    return (
        <div>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
                showThumbs={false}
            >
                {img.map((imageItemLink, index) => (
                    <img key={index} src={imageItemLink} alt={`Slide ${index}`} />
                ))}
            </Carousel>
            <div className={classes.hero__img}></div>
        </div>
    )
}

export default CarouselEffect