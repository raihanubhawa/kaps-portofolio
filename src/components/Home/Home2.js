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
              <span className="purple"> Tentang Saya</span>
            </h1>
            <p className="home-about-body">
              Saya adalah seorang yang tertarik dalam dunia pemrograman, dan saya telah mempelajari beberapa bahasa pemrograman seperti PHP, Javascript, Golang, dan Java.
              <br />
              <br />
              Saya memiliki minat yang besar dalam pengembangan teknologi web, backend dan produk baru, terutama yang berkaitan dengan kecerdasan buatan.
              <br />
              <br />
              Setiap kesempatan, saya selalu bersemangat untuk membuat produk menggunakan Node.js, dan saya juga senang untuk bereksplorasi dengan berbagai library dan framework modern seperti React.js dan Next.js.
              <br />
              <br />
              Semoga perjalanan saya dalam dunia pemrograman terus lancar. Jika ada yang bisa saya bantu, jangan ragu untuk menghubungi saya ya.
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
            <h1>CARI SAYA DI</h1>
            <p>
              Jangan ragu untuk <span className="purple">terhubung</span> dengan saya
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
