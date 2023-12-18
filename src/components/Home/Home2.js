import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Biar Ga <span className="purple"> Soasik, </span> Perkenalin NIh
            </h1>
            <p className="home-about-body">
              Gue orang yang kecanduan coding, dan setidaknya gue udah ngerti sesuatu, kayaknya sih... 🤷‍♂️
              <br />
              <br />Gue selalu interest dengan bahasa
              <i>
                <b className="purple"> Javascript, Golang, dan Java. </b>
              </i>
              <br />
              <br />
              Pokoknya gue demen banget sama bikin &nbsp;
              <i>
                <b className="purple">Teknologi web dan Produk Baru </b>  apalagi yang ada hubungannya sama{" "}
                <b className="purple">
                  AI gitu.
                </b>
              </i>
              <br />
              <br />
              Tiap bisa, gue selalu ngegass buat bikin produk pake <b className="purple">Node.js</b>, terus ulik uli pakai
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; kaya
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              &nbsp;
              Seru banget, deh! Semoga lancar terus, ya! Kalo ada yang bisa gue bantu, langsung aja kabarin gue aje ya kaannn....
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/raihanubhawa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raihanubhawa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ekapricorn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
