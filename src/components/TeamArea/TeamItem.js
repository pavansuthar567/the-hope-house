import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const TeamItem = ({ team = {} }) => {
  const { image, socials, name, tagline } = team;

  return (
    <Col lg={4} md={7}>
      <div className="team-item mt-30">
        <div className="team-thumb">
          <Image src={image} alt="team" />
          <div className="share">
            <i className="fa fa-share-alt"></i>
            <ul>
              {socials.map(({ id, icon, href }) => (
                <li key={id}>
                  <Link href={href}>
                    <i className={icon}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="team-content text-center">
          <h5 className="title">{name}</h5>
          <span>{tagline}</span>
        </div>
      </div>
    </Col>
  );
};

export default TeamItem;
