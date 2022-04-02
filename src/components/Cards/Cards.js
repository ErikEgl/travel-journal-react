import React from "react";
import Card from "./Card/Card";
import data from "./data";

function Cards() {
  const places = data.map((place) => {
    return <Card key={place.id} {...place} />;
  });
  return (
    <>
      <section className="cards">
        <div className="container">{places}</div>
      </section>
    </>
  );
}

export default Cards;
