import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const CommentOneSingle = ({ comment = {} }) => {
  const { image, name, date, text } = comment;

  return (
    <div className="comment-one__single">
      <div className="comment-one__image">
        <Image src={image} alt="" />
      </div>
      <div className="comment-one__content">
        <h3>
          {name} <span className="comment-one__date"> {date}</span>
        </h3>
        <p>{text}</p>
      </div>
      <div className="blog-btn">
        <Link href="#" className="main-btn">
          Reply
        </Link>
      </div>
    </div>
  );
};

const CommentOne = ({ comments = [], className = "" }) => {
  return (
    <div className={`comment-one ${className}`}>
      <h3 className="comment-one__block-title">{comments.length} Comments</h3>
      {comments.map((comment) => (
        <CommentOneSingle comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentOne;
