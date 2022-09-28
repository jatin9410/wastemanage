import React, { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Jumbotron,
  Media,
} from "reactstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Team(props) {
  return (
    <div classname="container">
      <Media>
        <Image
          src={props.src}
          style={{ maxWidth: 175, maxHeight: 175 }}
          alt="Precycle"
          roundedCircle
          fluid
        />

        <Media body align-self-center className="ml-1">
          <Media heading>
            <h2 style={{ fontFamily: "Joti one", color: "black" }}>
              {props.name}
            </h2>
          </Media>
          <p>{props.post}</p>
        </Media>
      </Media>
    </div>
  );
}

function About(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <Jumbotron>
            <div className="container">
              <div className="row row-header">
                <div className="col-12">
                  <p>
                  Waste Management is devoted to the presentation and discussion of information on solid waste generation, characterization, minimization, collection, separation, treatment, and disposal, as well as manuscripts that address waste management policy, education, and economic and environmental assessments
                  </p>
                </div>
              </div>
            </div>
          </Jumbotron>

          <h2>About</h2>
          <p>
          Several studies and researches have been conducted on the sources and characteristics of wastes as well as the possible adverse effect of inappropriate handling and best international practices. One thing that is still not clear however is what exactly constitutes a waste? How much do we know about what should be classed as waste? What are the historical contexts of waste managements? The present paper seeks to examine these vital questions with a view to providing answers from previous studies. The paper employed a desktop approach to provide answers to the research objectives. Specifically, the paper uses a descriptive approach to gather information from peer reviewed publications such as, journal articles, environmental organizations reports and books. It was found that, waste is to a large extent subjective in meaning as a substance can only be regarded as a waste when the owner labels it as such.
          </p>
          <p></p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
          <img src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/2/f/2f0e9c3292c16d43fe0fecf9070558e25538c4a3c5f012780a3adbaaa9e68684/solid-waste-management-mc-slide1.png" alt="ff"></img>
          </Card>
        </div>
        <div className="col-12">
          <div data-aos="fade-up">
            <Card>
              <CardBody className="bg-faded">
                <blockquote className="blockquote">
                  <p className="mb-0">
                  “Waste isn’t waste until we waste it.”
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">
                      {" "}
                      Will. I. Am
                    </cite>
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
