import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";
import {submitFeedback} from '../../actions/auth'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstame: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      stars: "4",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    
    
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(firstname, lastname, telnum, email) {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };

    if (this.state.touched.firstname && firstname.length < 3)
      errors.firstname = "First Name should be >= 3 characters";
    else if (this.state.touched.firstname && firstname.length > 10)
      errors.firstname = "First Name should be <= 10 characters";

    if (this.state.touched.lastname && lastname.length < 3)
      errors.lastname = "Last Name should be >= 3 characters";
    else if (this.state.touched.lastname && lastname.length > 10)
      errors.lastname = "Last Name should be <= 10 characters";

    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum))
      errors.telnum = "Tel. Number should contain only numbers";

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    )
      errors.email = "Email should contain a @";

    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>We would love to hear from you</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              Kosi, Kosi Ext., Ganga
              <br />
              NIT Patna
              <br />
              Patna
              <br />
              <i className="fa fa-phone"></i>: +91 9455017625
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">a9074yush@gmail.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
            <iframe
              title="Map of NIT Patna"
              frameborder="0"
              style={{ border: 0 }}
              width="400"
              height="400"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZyhz5txY7TkRBi_IGprzWUA&key=AIzaSyAAo6ldrpFU8SwYN_IErytfVs8f25hWopE"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <Button
                role="button"
                className="btn btn-primary"
                href="tel:+91 9455017625"
              >
                <i className="fa fa-phone"></i> Call
              </Button>
              <Button role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </Button>
              <Button
                role="button"
                className="btn btn-success"
                href="mailto:a9074vijay@gmail.com"
              >
                <i className="fa fa-envelope-o"></i> Email
              </Button>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Contact;
