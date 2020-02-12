import React from "react";
import WandItem from "./WandItem";

function WandList(props) {
  const wandList = props.wands.map(wand => (
    <WandItem key={wand.wood} wand={wand} />
  ));
  return <div classname="row align-items-center my-5">{wandList}</div>;
}

export default WandList;
