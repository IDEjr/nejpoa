import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./style.module.css"
let productsp = [{
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
},
{
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
},
{
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
},
];

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

const Slider = () => {
    const PartnersConfig = {
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
        center: true,
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

return (
    <div className={styles.sliderContainer}>
        <OwlCarousel
        className={styles.slider}
        {...PartnersConfig}    
        >
            <div className={styles.sliderItem}>
                renner
            </div>
            <div className={styles.sliderItem}>
                batman
            </div>
            <div className={styles.sliderItem}>
                com monique
            </div>
        </OwlCarousel>
    </div>
    )
};
export default Slider;
