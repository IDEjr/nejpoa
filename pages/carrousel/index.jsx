import React from "react";
import PartnersSlider from "../../components/Sliders/PartnersSlider";
import BlogSlider from "../../components/Sliders/BlogSlider";
import EventsSlider from "../../components/Sliders/EventsSlider";
import MVV from "../../components/MVV"
export default function Home() {
  return (
    <div style={{display: 'flex', gap: 50, flexDirection: 'column'}}>
      <MVV/>
    </div>
  );
}