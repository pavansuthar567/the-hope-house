import { blogDetailsMain } from "@/data/newsArea";
import moment from "moment";
import Link from "next/link";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";

const { socials } = blogDetailsMain;

const BlogDetailsMain = (props) => {
  const { blog = {} } = props;
  const { featuredImage, publishedDate, author, content, title, tags } = blog;

  return (
    <div className="blog-details__main">
      <div className="blog-details__image">
        <Image src={featuredImage?.[0]} alt="thumb" />
      </div>
      <div className="blog-details__content">
        <span>{moment(publishedDate).format("D MMMM, YYYY")}</span>
        <div className="blog-one__meta">
          <Link href="#">
            <i className="fa fa-user-o"></i> {author}
          </Link>
          {/* <Link href="#">
            <i className="fa fa-comments-o"></i> {comments} comments
          </Link> */}
        </div>
        <h3>{title}</h3>
        {/* <p>{text1}</p>
        <p>{text2}</p> */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <style jsx global>{`
          .blog-content * {
            all: unset;
            display: revert;
          }
          .blog-content img {
            max-width: 100%;
            height: auto;
          }
          .blog-content table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 16px;
            text-align: left;
          }
          .blog-content table th,
          .blog-content table td {
            border: 1px solid #ddd;
            padding: 12px 15px;
          }
          .blog-content table th {
            background-color: #f4f4f4;
            font-weight: bold;
          }
          .blog-content table tr:nth-child(even) {
            background-color: #f9f9f9;
          }
          .blog-content table tr:hover {
            background-color: #f1f1f1;
          }
          .blog-content blockquote {
            border-left: 4px solid #ddd;
            padding-left: 1em;
            margin: 1em 0;
          }
          .blog-content strong {
            font-weight: bold;
          }
          .blog-content em {
            font-style: italic;
          }
          .blog-content i {
            font-style: italic;
          }
          .blog-content h1,
          .blog-content h2,
          .blog-content h3,
          .blog-content h4,
          .blog-content h5,
          .blog-content h6 {
            margin: 1em 0;
            font-weight: bold;
            line-height: 1.2;
            display: block;
          }
          .blog-content h1 {
            font-size: 2em;
          }
          .blog-content h2 {
            font-size: 1.75em;
          }
          .blog-content h3 {
            font-size: 1.5em;
          }
          .blog-content h4 {
            font-size: 1.25em;
          }
          .blog-content h5 {
            font-size: 1em;
          }
          .blog-content h6 {
            font-size: 0.875em;
          }
          .blog-content ul {
            list-style-type: disc;
            margin: 1em 0;
            padding-left: 1.5em;
          }
          .blog-content ul li {
            margin-bottom: 0.5em;
            font-weight: bold;
          }
          .blog-content ul li ul li {
            font-weight: normal;
          }
          .blog-content ol {
            list-style-type: decimal;
            margin: 1em 0;
            padding-left: 1.5em;
          }
          .blog-content ol li {
            margin-bottom: 0.5em;
          }
          .blog-content input[type="checkbox"] {
            margin-right: 0.5em;
            display: inline-block;
            vertical-align: middle;
            appearance: auto;
          }
          .blog-content input[type="checkbox"] + label {
            font-weight: normal;
            display: inline;
          }
          .blog-content a {
            color: #007bff;
            text-decoration: underline;
            cursor: pointer;
          }
          .blog-content a:hover {
            color: #0056b3;
          }
        `}</style>
      </div>
      <div className="blog-details__meta">
        <div className="blog-details__tags">
          <span>Tags: </span>
          {(Array.isArray(tags) ? tags : tags?.split(","))?.map((tag, i) => (
            <Fragment key={i}>
              <Link href="#">{tag}</Link>
              {i !== tags?.split(",")?.length - 1 && ", "}
            </Fragment>
          ))}
        </div>
        <div className="blog-details__share">
          <ul>
            {socials.map(({ id, icon, href = "" }) => (
              <li key={id}>
                <Link href={href} target="_blank">
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
