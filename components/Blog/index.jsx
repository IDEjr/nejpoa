import React from 'react'
import BlogsSlider from "../Sliders/BlogSlider"
import styles from "./blogs.module.css"
import Titulo from "../title"

export default function Blog(props) {
  return (
    <div className={styles.container}>
        <Titulo title="Blog"></Titulo>
        <BlogsSlider list={props.list}/>
    </div>
  )
}
