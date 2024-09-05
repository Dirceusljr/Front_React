import React from "react";
import Carousel from "../components/Carousel";
import HighlightCollection from "../components/HighlightCollection";
import CardList from "../components/CardList";
import SpecialOffer from "../components/SpecialOffer";

const Home = () => {
  return (
    <section>
      <Carousel />
      <HighlightCollection />
      <CardList />
      <SpecialOffer />
    </section>
  );
};

export default Home;
