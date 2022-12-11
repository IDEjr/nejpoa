import React from 'react'
import EventsSlider from "../Sliders/PartnersSlider"
import styles from "./partners.module.css"
import Titulo from "../title"
import Link from 'next/link'

export default function Partners(props) {
  return (
    <div id="parceiros" className={styles.container}>
        <Titulo title="Nossos parceiros" color="#4C9ABB" ></Titulo>
        <EventsSlider list={props.list} />
        <Link href="/parceiros"><a className={styles.linkBtn}>VER TODOS</a></Link>
    </div>
  )
}
