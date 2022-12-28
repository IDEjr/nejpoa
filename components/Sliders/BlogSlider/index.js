import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./style.module.css"
import BlogTemplate from "../../Carrousel/BlogTemplate"

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
    const BlogConfig = {
        nav: true,
        dots: false,
        loop:false,
        navRewind: false,
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
        navClass: [`${styles.owlPrev} owl-prev`, `${styles.owlNext} owl-next`],
        navText: ['',''],
    };

return (
    <div className={styles.sliderContainer}>
        <OwlCarousel
        className={styles.slider}
        {...BlogConfig}    
        >   
            {props.list.map((post, key)=>{
                return(
                    <div key={key} className={styles.sliderItem}>
                        <BlogTemplate img={post.image_source} title={post.title} subtitle={post.subtitle} date={post.date}/>
                    </div>
                )
            })}
        </OwlCarousel>
    </div>
    )
};
export default Slider;
