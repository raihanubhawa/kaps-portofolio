import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Holla Semua, Nama gue <span className="purple">Raihan Anubhawa </span>
            dari <span className="purple"> Jakarta, Indonesia.</span>
            <br />
            Gue sekarang kerja Sebagai WebDev di Kalacakra Technology
            <br />
            Gue lulusan <span className="purple">SMKN 10, Jurusan RPL </span>. Dan sekarang lanjut Kuliah Jurusan IT, di UNINDRA
            <br />
            <br />
            Selain ngoding, gue juga ada aktivitas lain nii broouw!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ngegame (Mobile Legends, Valorant, dan Dota 2)
            </li>
            <li className="about-activity">
              <ImPointRight /> Bikin Kopi Manual Brew (V60, Vietnam Drip, dan Aeropress )
            </li>
            <li className="about-activity">
              <ImPointRight /> Nongkrong biar ga dikira IT Ansos hehehe
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
