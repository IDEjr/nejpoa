import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./style.module.css"
import Link from "next/link";

var $ = require("jquery");
if (typeof window !== "undefined") {
window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
ssr: false,
});

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
            830:{
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
   
    return (
        <div className={styles.sliderContainer}>
            <OwlCarousel
            className={styles.slider}
            {...EventsConfig}    
            >
                {props.list.map((event,key)=>{
                    return(
                        <Link href={`eventos/${event.title}`} key={key}  >
                        <a className={styles.sliderItem}>
                            <img layout={"fill"} alt={"Imagem do evento NEJPOA"} src={event.image_source}/>
                        </a> 
                        </Link> 
                    )
                })}
            </OwlCarousel>
        </div>
    )
};
export default Slider;
