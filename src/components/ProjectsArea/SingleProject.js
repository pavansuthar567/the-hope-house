import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProject = ({ project = {} }) => {
  const {
    _id,
    eventName,
    eventType,
    startDate,
    // endDate,
    // location,
    // capacity,
    // participantsRegistered,
    featuredImage,
    // status,
  } = project;

  const formattedStartDate = new Date(startDate).toLocaleDateString();
  // const percentageFilled = Math.min(
  //   (participantsRegistered / capacity) * 100,
  //   100
  // );

  return (
    <div className="explore-projects-item mt-30" style={{ cursor: "pointer" }}>
      <div className="explore-projects-thumb">
        <Image
          src={featuredImage?.[0]}
          alt={eventName}
          width={750} // Adjusted width for a larger image
          height={225}
          style={{ objectFit: "cover" }}
        />
        {/* <Link href="#">
          <i className="fa fa-heart"></i>
        </Link> */}
      </div>
      <div className="explore-projects-content">
        <div className="item d-flex align-items-center">
          <span>{eventType}</span>
          <p>
            <i className="fa fa-clock-o"></i> {formattedStartDate}
          </p>
        </div>
        <Link href={`/project/${_id}`}>
          <h3 className="title">{eventName}</h3>
        </Link>
        {/* <div className="projects-range">
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
        </div> */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <Link
            href="https://wa.me/yourwhatsapplink"
            className="whatsapp-link"
            target="_blank"
            style={{
              backgroundColor: "black",
              padding: "10px 20px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "40px",
              width: "75px",
              transition: "background-color 0.3s",
              fontSize: "14px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#29f0b4";
              e.currentTarget.querySelector(".fa-whatsapp").style.color =
                "black";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "black";
              e.currentTarget.querySelector(".fa-whatsapp").style.color =
                "#29f0b4";
            }}
          >
            <i
              className="fa fa-whatsapp"
              style={{ fontSize: "20px", color: "#29f0b4" }}
            ></i>
          </Link>
          <Link
            className="main-btn mt-2 mt-md-0"
            href="/donate"
            style={{
              fontSize: "14px",
              padding: "0px 20px",
              marginLeft: "10px",
            }} // Added margin for spacing
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.querySelector(".fa-heart").style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#674df0";
              e.currentTarget.querySelector(".fa-heart").style.color =
                "#674df0";
            }}
          >
            <i
              className="fa fa-heart"
              style={{ color: "#674df0", marginRight: "5px" }}
            ></i>
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
