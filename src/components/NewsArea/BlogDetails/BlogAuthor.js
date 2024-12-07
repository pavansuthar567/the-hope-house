import { blogAuthor } from "@/data/newsArea";
import React from "react";
import { Image } from "react-bootstrap";

const { image, text } = blogAuthor;

const BlogAuthor = (props) => {
  const { blog = {} } = props;
  const { author } = blog;

  return (
    <div className="blog-author">
      <div className="blog-author__image">
        <Image src={image?.src} alt="author" />
      </div>
      <div className="blog-author__content">
        <h3>{author}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BlogAuthor;
