import React from "react";
import Card from "./Card";

const CardList = ({ profiles }) => (
  <>
    {profiles.map(profile => (
      <Card key={profile.id} profile={profile} />
    ))}
  </>
);

export default CardList;
