import React from "react";
import { Card } from "antd";

const ProviderList = ({ provider, onSelect, isSelected }) => {
  const handleSelect = () => {
    onSelect(provider._id);
    console.log("Provider Clicked:", provider._id);
  };

  return (
    <Card
      onClick={handleSelect}
      hoverable
      style={{
        border: isSelected ? "2px solid #000" : "2px solid rgb(200, 250, 172)",
        margin: "7px",
      }}
    >
      <h3>{provider.name}</h3>
      <p>
        <b>Auto Number:</b> {provider.autonumber}
      </p>
      <p>
        <b>Email Id:</b> {provider.email}
      </p>
      {provider?.finalrating !== 0 ? (
        <p>
          <b>Ratings:</b> {provider?.finalrating}
        </p>
      ) : (
        <p>
          <b>Ratings: Unrated</b>
        </p>
      )}

      {provider?.timings ? (
        <p>
          <b>Timings:</b> {provider.timings[0]}-{provider.timings[1]}
        </p>
      ) : (
        <p>
          <b>Timings Not provided</b>
        </p>
      )}
    </Card>
  );
};

export default ProviderList;
