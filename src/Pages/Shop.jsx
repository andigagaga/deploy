import React from "react";
import Hero from "../Componets/Hero/Hero";
import Popular from "../Componets/Popular/Popular";
import Offers from "../Componets/Offers/Offers";
import NewCollections from "../Componets/NewCollections/NewCollections";
import NewsLetter from "../Componets/NewsLetter/NewsLetter";

export default function Shop() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}
