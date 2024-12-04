import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardOutlined";
import CloseIcon from "@mui/icons-material/CloseOutlined";

const PortfolioItem = ({ portfolio, className = "", onImageClick }) => {
  const { imageUrl, caption } = portfolio;

  return (
    <div className={`portfolio-item${className}`}>
      <Image src={imageUrl} alt={caption} width={370} height={403} />
      <div className="portfolio-overlay">
        <Link
          className="image-popup"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onImageClick();
          }}
        >
          <i className="flaticon-add"></i>
        </Link>
        <div className="caption">
          <span className="caption-text">{caption}</span>
        </div>
      </div>
    </div>
  );
};

// Modal Component for Zoomed View
PortfolioItem.ZoomModal = ({ portfolio, onNext, onPrev, onClose }) => {
  const { imageUrl, caption } = portfolio;

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Modal show onHide={onClose} fullscreen>
      <Modal.Body style={{ position: "relative", background: "#000" }}>
        <Image
          src={imageUrl}
          alt={caption}
          layout="fill"
          objectFit="contain"
          style={{ zIndex: 1 }}
        />
        <IconButton
          className="modal-prev-btn"
          onClick={onPrev}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "white", // Added white background
            borderRadius: "50%", // Optional: make it circular
          }}
        >
          <ArrowBackIcon fontSize="medium" />
        </IconButton>
        <IconButton
          className="modal-next-btn"
          onClick={onNext}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "white", // Added white background
            borderRadius: "50%", // Optional: make it circular
          }}
        >
          <ArrowForwardIcon fontSize="medium" />
        </IconButton>
        <IconButton
          className="modal-close-btn"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 10,
            background: "white", // Added white background
            borderRadius: "50%", // Optional: make it circular
          }}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
      </Modal.Body>
    </Modal>
  );
};

export default PortfolioItem;
