import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProject = ({ project = {} }) => {
  const { 
    eventName,
    eventType,
    startDate,
    endDate, 
    location,
    capacity,
    participantsRegistered,
    featuredImage,
    status
  } = project;

  const formattedStartDate = new Date(startDate).toLocaleDateString();
  const percentageFilled = Math.min((participantsRegistered / capacity) * 100, 100);

  return (
    <div className="explore-projects-item mt-30" style={{cursor: 'pointer'}}>
      <div className="explore-projects-thumb">
        <Image
          src={featuredImage}
          alt={eventName}
          width={750}  // Adjusted width for a larger image
          height={225}
          style={{objectFit: 'cover'}}
        />
        <Link href="#">
          <i className="fa fa-heart"></i>
        </Link>
      </div>
      <div className="explore-projects-content">
        <div className="item d-flex align-items-center">
          <span>{eventType}</span>
          <p>
            <i className="fa fa-clock-o"></i> {formattedStartDate}
          </p>
        </div>
        <Link href="/single-project">
          <h3 className="title">{eventName}</h3>
        </Link>
        <div className="projects-range">
          <div className="projects-range-content">
            <ul>
              <li>Registered:</li>
              <li>{percentageFilled.toFixed(0)}%</li>
            </ul>
            <div className="range"></div>
          </div>
        </div>
        <div className="projects-goal">
          <span>
            Capacity: <span>{capacity} seats</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
