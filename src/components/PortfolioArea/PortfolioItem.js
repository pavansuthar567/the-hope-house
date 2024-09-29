import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const PortfolioItem = ({ portfolio = {}, className = "" }) => {
  const { image } = portfolio;
  return (
    <div className={`portfolio-item${className}`}>
      <Image src={image} alt="" />
      <div className="portfolio-overlay">
        <Link className="image-popup" href="#">
          <i className="flaticon-add"></i>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioItem;
