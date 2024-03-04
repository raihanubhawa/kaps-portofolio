import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Sekali lagi saya perkenalkan diri nama saya <span className="purple">Raihan Anubhawa Ekaputra </span>
            dari <span className="purple"> Jakarta, Indonesia.</span> Sekarang saya menjadi Front End Developer Di <span className="purple"> Cakratech Technology Indonesia </span>
            Sekarang saya memegang Bahasa<span className="purple"> React Js</span>. Dan Kesibukan saya Sekarang juga adalah melanjutkan kuliah jurusan IT, di UNINDRA
            <br />
            <br />
            Selain bekerja dan Kuliah, aku juga ada kesibukan dan menjadi hobby, yaitu 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bermain Game (Valoran, Mobile Legends, dan Dota 2)
            </li>
            <li className="about-activity">
              <ImPointRight /> Iseng iseng membuat dan mempelajari Kopi seperti V60 dan Manual brew lainya.
            </li>
            <li className="about-activity">
              <ImPointRight /> Kumpul dengan teman yang tidak sejurusan, agar menambah relasi dan ilmu pengetahuan.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "man jadda wajada"{" "}
          </p>
          <footer className="blockquote-footer">Akbar Zainudin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
