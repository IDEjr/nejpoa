import React from 'react'
import EventsSlider from "../../components/Sliders/EventsSlider"
import styles from "./events.module.css"
import Titulo from "../title"
import Link from 'next/link'

export default function Events(props) {
  return (
    <div id="eventos" className={styles.container}>
        <Titulo title="Nossos eventos"></Titulo>
        <EventsSlider list={props.list} />
        <Link href="/eventos"><a className={styles.linkBtn}>VER TODOS</a></Link>
    </div>
  )
}
