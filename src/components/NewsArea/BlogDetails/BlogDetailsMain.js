import { blogDetailsMain } from "@/data/newsArea";
import Link from "next/link";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";

const { image, date, admin, comments, title, text1, text2, tags, socials } =
  blogDetailsMain;

const BlogDetailsMain = () => {
  return (
    <div className="blog-details__main">
      <div className="blog-details__image">
        <Image src={image.src} alt="thumb" />
      </div>
      <div className="blog-details__content">
        <span>{date}</span>
        <div className="blog-one__meta">
          <Link href="#">
            <i className="fa fa-user-o"></i> {admin}
          </Link>
          <Link href="#">
            <i className="fa fa-comments-o"></i> {comments} comments
          </Link>
        </div>
        <h3>{title}</h3>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <div className="blog-details__meta">
        <div className="blog-details__tags">
          <span>Tags: </span>
          {tags.map((tag, i) => (
            <Fragment key={i}>
              <Link href="#">{tag},</Link>{" "}
            </Fragment>
          ))}
        </div>
        <div className="blog-details__share">
          <ul>
            {socials.map(({ id, icon, href = "" }) => (
              <li key={id}>
                <Link href={href}>
                  <i className={icon}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsMain;
