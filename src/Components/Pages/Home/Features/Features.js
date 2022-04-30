import React from "react";
import { Row } from "react-bootstrap";
import Feature1 from "../../../../images/feature/features1.png";
import Feature2 from "../../../../images/feature/features2.png";
import Feature3 from "../../../../images/feature/features3.png";
import Feature from "../Feature/Feature";

const features = [
  { id: 1, title: "Speaker", img: Feature1, text: "AUDIO" },
  { id: 2, title: "Watch", img: Feature2 , text: "SMART"},
  { id: 3, title: "Discount", img: Feature3 , text: "BIGGEST" },
];
const Features = () => {
  return (
    <section className="home-feature p-4">
      <Row xs={1} md={3} className="g-4">
        {features.map((feature) => (
          <Feature key={feature.id} feature={feature}/>
        ))}
      </Row>
    </section>
  );
};

export default Features;
