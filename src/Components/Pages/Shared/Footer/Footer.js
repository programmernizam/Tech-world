import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../../../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube, AiFillPhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 footer">
      <Container>
        <Row xs={1} md={2} lg={3}>
          <Col className="mb-3">
            <img src={Logo} alt="" />
            <p className="my-4">
              Technology has become a part of our daily lives and for a huge
              portion of our life, we are dependent on tech products daily
            </p>
          </Col>
          <Col className="d-flex justify-content-lg-center mb-3">
            <div>
              <h2>Our Services</h2>
              <p>FREE SHIPPING</p>
              <p>SUPPORT 24/7</p>
              <p>30 DAYS RETURN</p>
              <p>100% PAYMENT SECURE</p>
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <FaFacebookF className="bg-danger p-2 rounded fs-1"></FaFacebookF>
              </Col>
              <Col>
                <BsTwitter className="bg-danger p-2 rounded fs-1"></BsTwitter>
              </Col>
              <Col>
                <AiFillInstagram className="bg-danger p-2 rounded fs-1"></AiFillInstagram>
              </Col>
              <Col>
                <AiFillYoutube className="bg-danger p-2 rounded fs-1"></AiFillYoutube>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <div className="d-flex my-3">
              <div>
                <AiFillPhone className="fs-3"></AiFillPhone>
              </div>
              <div className="ms-2">
                <h4>+880-163-8548-900</h4>
              </div>
            </div>
            <div className="d-flex my-3">
              <div>
                <BsFillEnvelopeFill className="fs-3"></BsFillEnvelopeFill>
              </div>
              <div className="ms-2">
                <h4 className="fw-normal">mdnizam12109@gmail.com</h4>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center">
          <hr />
          <p>Copyright © reserved by TECH WORLD {new Date().getFullYear()}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
