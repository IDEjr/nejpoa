import React from "react";
import PartnersSlider from "../../components/Sliders/PartnersSlider";
import BlogSlider from "../../components/Sliders/BlogSlider";
import EventsSlider from "../../components/Sliders/EventsSlider";

export default function Home() {
  return (
    <div style={{display: 'flex', gap: 50, flexDirection: 'column'}}>
      <PartnersSlider />
      <BlogSlider />
      <EventsSlider />
    </div>
  );
}