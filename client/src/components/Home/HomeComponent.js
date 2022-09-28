import React, { useState, useEffect } from "react";
import './styles.css'
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
import Image from "react-bootstrap/Image";
import image1 from "../../assests/seller.png";
import image2 from "../../assests/rider.png";
import image3 from "../../assests/vendor.png";
import Testimonials from "../Testimonials/Testimonials.js";
import Facts from "../FactsFigures/FactsFigures";
import AOS from "aos";
import "aos/dist/aos.css";

const items = [
  {
    src: "./assets/C1.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "./assets/C2.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "./assets/C3.jpg",
    altText: "",
    caption: "",
  },
];

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
          {" "}
          <CardItem image={image1} header={headers[0]} para={paras[0]} />
        </div>
        <div className="col-13 col-sm-6">
          {" "}
          <CardItem image={image2} header={headers[1]} para={paras[1]} />
        </div>
      </div>
    </div>
  );
};

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <center>
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </center>
      </CarouselItem>
    );
  });

  return (
    <React.Fragment>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <div data-aos="fade-up">
        <Display />
      </div>
      <br />
      <hr />
      <br />
      <div className="home-page-section-2">
                <div className="home-page-section-2-header">
                    What are we doing?
                </div>
                <div>
                    <hr className="home-page-section-2-line"></hr>
                </div>
                
                <div className="home-page-section-2-content-container">
                    <div className="home-page-section-2-content-1">
                        India has ranked 168th out of 180 countries in the 2020 Environmental Performance Index (EPI), according to researchers at Yale and Columbia universities, who say Indias decarbonization agenda needs to accelerate, and the country faces a number of serious environmental health risks, including poor air quality.
                    </div>
                    <div className="home-page-section-2-content-1">
                        Things like these need to be worked upon fast and we are doing just that. We are a team of tech enthusiasts who are trying to contribute to this cause in our own way. In India if we simply tackle the problem of how the household waste is managed, we will solve a major part of the equation. Urban India generates 62 million tonnes of waste (MSW) annually, and it has been predicted that this will reach 165 million tonnes in 2030. 43 million tonnes of municipal solid waste is collected annually, out of which 31 million is dumped in landfill sites and just 11.9 million is treated. There is not enough public bins, and the available bins are not even covered and, in many cases, waste overflows out of those bins and ends up going all over the streets. Waste transporting vehicles are not even covered in many cases which also causes littering of the streets. Many citizens in India recklessly litter the streets too. Probably, they only littered the streets with banana leaves or bowls made of dried leaves a few years earlier, those kinds of litters were not that harmful as they were biodegradable and could even be eaten by stray animals. But in India today, what is mostly littered is plastic and in any society, it’s not easy to bring a quick cultural change.
                    </div>
                    <div className="home-page-section-2-content-1">
                        We, here at WM are trying to come up with a perfect solution to help the municipal organisations have a organised way of managing things digitally and more efficiently. The project has a number of functionalities that will make it a lot easier of collect and segregate waste in a much efficient way. 
                    </div>
                </div>
            </div>

            <div className="home-page-section-1">
                <img className="home-page-section-1-img" alt="crisisImage" src="https://res.cloudinary.com/kartik09/image/upload/v1664223394/waste-management/home1_jvlxjl.jpg" />

                <div className="place-cards-container">


                    <div className="place-card-1-container">
                        <div>
                            <img alt="crisisImage" className="place-card-1-image" src="https://res.cloudinary.com/kartik09/image/upload/v1664224358/waste-management/TOI_image_xnqnbh.webp" />
                        </div>
                        <div className="place-card-1-content-container">
                            <div className="place-card-1-content-header">
                                <img className="place-card-1-content-header-image" src="https://res.cloudinary.com/kartik09/image/upload/v1664224147/waste-management/TOI_logo_ji3xgm.png" />
                            </div>
                            <div className="place-card-1-content-header-text">
                                "Poor AQI cutting life short by 5.2 years in Kolkata"
                            </div>
                            <div className="place-card-1-content-header-content">
                                The average life expectancy of Kolkata’s citizens can improve by 5.2 years if the city meets the WHO standards of PM2.5 concentrations (5 µg/m³ ), according to the recently published Air Quality Life Index (AQLI) annual report by the Energy Policy Institute at the University of Chicago (EPIC).
                            </div>
                        </div>
                    </div>

                    <div className="place-card-2-container">
                        <div className="place-card-1-content-container">
                            <div className="place-card-1-content-header">
                                <img className="place-card-1-content-header-image" src="https://res.cloudinary.com/kartik09/image/upload/v1664225758/waste-management/guardianLogo_xpy3c2.jpg" />
                            </div>
                            <div className="place-card-1-content-header-text">
                                "About 26,000 tonnes of plastic Covid waste pollutes world’s oceans – study"
                            </div>
                            <div className="place-card-1-content-header-content">
                            Plastic waste from the Covid-19 pandemic weighing 25,900 tonnes, equivalent to more than 2,000 double decker buses, has leaked into the ocean, research has revealed. The mismanaged plastic waste, consisting of personal protective equipment such as masks and gloves, vastly exceeded the capability of countries to process it properly, researchers said.
                            </div>
                        </div>
                        <div>
                            <img alt="crisisImage" className="place-card-1-image" src="https://res.cloudinary.com/kartik09/image/upload/v1664225972/waste-management/water_wrnr6z.jpg" />
                        </div>
                    </div>

                    <div className="place-card-3-container">
                        <div>
                            <img alt="crisisImage" className="place-card-1-image" src="https://res.cloudinary.com/kartik09/image/upload/v1664226449/waste-management/hermes-rivera-R1_ibA4oXiI-unsplash_cjt1vm.jpg" />
                        </div>
                        <div className="place-card-1-content-container">
                            <div className="place-card-1-content-header">
                                <img className="place-card-1-content-header-image" src="https://res.cloudinary.com/kartik09/image/upload/v1664226356/waste-management/theHindu_vwcfkb.png" />
                            </div>
                            <div className="place-card-1-content-header-text">
                                "Pollution from waste burning may linger for days"
                            </div>
                            <div className="place-card-1-content-header-content">
                            The Health department in the district, which has done an assessment of the health hazards posed to the people owing to the burning of plastic at the Brahmapuram solid waste treatment plant, has said that many persons had complained of respiratory problems in the city, but there has not been any acute cases so far. A medical camp was conducted at Irimpanam, Thripunithura, the day after smoke enveloped the city. The field staff of the department have been going around in Vadavukode-Puthenkurisu panchayat and nearby areas and have set up a unit at the Vyttila mobility hub for any emergency action required.


                            </div>
                        </div>
                    </div>


                </div>
            </div>
 
            <div className="home-page-section-3">
                <div className="home-page-section-3-header">
                    How do we function?
                </div>
                <div>
                    <hr className="home-page-section-2-line"></hr>
                </div>
                <div className="home-page-section-3-content-container">
                    <div className="home-page-section-3-content-1-container">
                        <div className="home-page-section-3-content-1-header">Citizens</div>
                        <div className="home-page-section-3-content-1-text">
                            Anyone with a valid email address and/or a mobile number can register on our application where they can then simply go to the pickup request page and make a request for garbage pickup from the location they want. The user will have to provide basic information like, 1) Pickup Address, 2) Pin Code of the area, 3) Select the Type of waste they want to dispose and then simply mention the approximate amount of waste and Voila! The request will be sent to the nearest administration zone where the authorities will assign the pickup task to our other heroes, the garbage collectors.
                        </div>
                    </div>
                    <div className="home-page-section-3-content-1-container">
                        <div className="home-page-section-3-content-1-header">Collectors</div>
                        <div className="home-page-section-3-content-1-text">
                            The next part of our equation that we are solving are our garbage collectors. The job for them will be at least a little more easier with our project so that they can be benefited through our project. The collectors can register on our application where they will have to provide a little bit of background information for registering them with the Administration board. Once they are a registered member of the Organisation, they can simply login on the "Collector Portal" through their credentials and password and will have the following informations on their dashboard, 1) A map that will show the most optimal route from their location to all the pickup addressses that have been assigned to that particular collector for the day, 2) A detail card of every Citizen from where the collector has to pick up the waste which includes the address, contact info and name of the citizen, 3) Once the collector reports back to the Administration office, they will be marked "Completed" on the administration portal.
                        </div>
                    </div>
                    <div className="home-page-section-3-content-1-container">
                        <div className="home-page-section-3-content-1-header">Administration (Municipal Administrations)</div>
                        <div className="home-page-section-3-content-1-text">
                            The final part of the equation are the nine Administration Centers that are each assigned a specific zone of operation so that any request that comes on their area will be automatically assigned to them by us. The administrations also have a UUID and Password through which they can login on our application on the Administration portal and get the following informations: 1) The list of pickup requests that were made to them in their zone, 2) Record of the trucks and the garbage collectors who work for that particular Administration Zone, 3) The record of all the garbage collectors, 4) The record of all the waste that they are operating through their zone, 5) A list of all the completion records of the garbage collectors.
                        </div>
                    </div>
                </div>
            </div>


            <div className="home-page-section-4">
                <div className="home-page-section-3-header">
                    Our Team
                </div>
                <div>
                    <hr className="home-page-section-2-line"></hr>
                </div>
                <div className="home-page-section-4-content-container">
                    <div className="home-page-section-4-content-1">
                        <div><img className="team-member-image" alt="teamMemberImage" src="https://res.cloudinary.com/kartik09/image/upload/v1664263773/waste-management/jatin_znpz3t.jpg" /></div>
                        <div className="team-member-name">Jatin Khandelwal</div>
                        <div className="team-member-description">Backend Developer</div>
                    </div>

                    <div className="home-page-section-4-content-1">
                        <div><img className="team-member-image" alt="teamMemberImage" src="https://res.cloudinary.com/kartik09/image/upload/v1664264113/waste-management/kamal_ikbxwd.jpg" /></div>
                        <div className="team-member-name">Kamal Kataria</div>
                        <div className="team-member-description">Backend Developer</div>
                    </div>

                    <div className="home-page-section-4-content-1">
                        <div><img className="team-member-image" alt="teamMemberImage" src="https://res.cloudinary.com/kartik09/image/upload/v1664264830/waste-management/radhika2_hwtxli.jpg" /></div>
                        <div className="team-member-name">Radhika Khetan</div>
                        <div className="team-member-description">UI/UX Designer</div>
                    </div>

                    <div className="home-page-section-4-content-1">
                        <div><img className="team-member-image" alt="teamMemberImage" src="https://res.cloudinary.com/kartik09/image/upload/v1664264358/waste-management/kartik_i71prw.jpg" /></div>
                        <div className="team-member-name">Kartik Rai</div>
                        <div className="team-member-description">Frontend Developer</div>
                    </div>
                </div>
            </div>
            </React.Fragment>
       
  );
};

export default Home;