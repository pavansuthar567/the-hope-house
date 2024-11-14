import Link from "next/link";
import Image from "next/image";
import React, { useMemo } from "react";
import { Col } from "react-bootstrap";

const TeamItem = ({ team = {} }) => {
  const { profilePictureUrl, socialMediaLinks, firstName, lastName, role } =
    team || {};

  const convertSocialLinks = (socialLinks) => {
    const platforms = [
      { key: "twitter", icon: "fa fa-twitter" },
      { key: "facebook", icon: "fa fa-facebook-official" },
      { key: "instagram", icon: "fa fa-instagram" },
      { key: "linkedIn", icon: "fa fa-linkedin" },
    ];

    return platforms.map((platform, index) => ({
      id: index + 1,
      icon: platform.icon,
      href: socialLinks?.[platform.key] || "#", // Fallback to "#" if the link is missing
    }));
  };

  const socialLinks = useMemo(
    () => convertSocialLinks(socialMediaLinks),
    [socialMediaLinks]
  );

  return (
    <Col lg={3} md={6}>
      <div className="team-item mt-30">
        <div className="team-thumb">
          <Image
            src={profilePictureUrl}
            alt={`${firstName} ${lastName}`}
            width={270}
            height={360}
            priority // Optimize loading
            style={{ width: "270px", height: "360px", objectFit: "cover" }}
            className="img-fluid"
          />
          <div className="share">
            <i className="fa fa-share-alt"></i>
            <ul>
              {socialLinks?.map(({ id, icon, href }) => (
                <li key={id}>
                  <Link href={href} target="blank">
                    <i className={icon}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="team-content text-center">
          <h5 className="title">
            {firstName} {lastName}
          </h5>
          <span>{role}</span>
        </div>
      </div>
    </Col>
  );
};

export default TeamItem;
