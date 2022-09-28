import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Media,
  Row,
  Col,
} from "reactstrap";
import image1 from "../../assests/seller.png";
import image2 from "../../assests/rider.png"
import "aos/dist/aos.css";

const CardItem = ({ image, header, para }) => (
    <div className="box">
      <div className="box-image">
        <img src={image} alt="" />
      </div>
      <div className="box-content">
        <h2 className="box-header">{header}</h2>
        <p>{para}</p>
      </div>
    </div>
  );
const Display = () => {
    const headers = ["Citizens", "Driver"];
  
    const paras = [
      "Want to manage waste? Join us",
      "Be a Driver and take part with us",
    ];
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-13 col-sm-6">
            <Link to="/signup/seller">
            {" "}
            <CardItem image={image1} header={headers[0]} para={paras[0]} />
            </Link>
          </div>
          <div className="col-13 col-sm-6">
            <Link to="/signup/rider">
            {" "}
            <CardItem image={image2} header={headers[1]} para={paras[1]} />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const Reg=()=>{
    return(
        <React.Fragment>
            <Display />
            </React.Fragment>
    );
  }
  export default Reg;