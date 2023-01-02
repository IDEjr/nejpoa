import React from 'react'
import BlogsSlider from "../Sliders/BlogSlider"
import styles from "./blogs.module.css"
import Titulo from "../title"
import Link from 'next/link'


export default function Blog(props) {

  return (
    <div id="blog" className={styles.container}>
        <Titulo title="Blog"></Titulo>
        <BlogsSlider list={props.list}/>
        <Link href="/blog"><a className={styles.linkBtn}>VER TODOS</a></Link>
    </div>
  )
}
