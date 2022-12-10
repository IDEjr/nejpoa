import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./style.module.css"

var $ = require("jquery");
if (typeof window !== "undefined") {
window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';
const Slider = (props) => {
    const EventsConfig = {
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        mouseDrag: true,
        touchDrag: true,
        responsive:{
            0:{
                items:1,    
            },
            700:{
                items:2,
            },
            1000:{
                items:3,
            },
        },
        navContainerClass: `${styles.owlNav}`,
        navClass: [`${styles.owlPrev}`, `${styles.owlNext}`],
        navText: ['',''],

    };
    console.log(props.list)
    return (
        <div className={styles.sliderContainer}>
            <OwlCarousel
            className={styles.slider}
            {...EventsConfig}    
            >
                {props.list.map((event,key)=>{
                    return(
                        <a href={event.link} key={key} className={styles.sliderItem}>
                            <img layout={"fill"} alt={"Imagem do evento NEJPOA"} src={event.image_source}/>
                        </a> 
                    )
                })}
            </OwlCarousel>
        </div>
    )
};
export default Slider;
