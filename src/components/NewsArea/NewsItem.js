import moment from "moment/moment";
import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const NewsItem = ({ news = {}, index = 0, newsTwo = false }) => {
  const { featuredImage, publishedDate, author, comments, title, image2 } =
    news;
  const newImage = newsTwo && image2 ? image2 : featuredImage;
  const isEven = (index + 1) % 2 === 0;

  return (
    <Col lg={newsTwo ? 4 : 3} md={newsTwo ? 7 : 6}>
      <div
        className={`news-item mt-30${
          !newsTwo && isEven ? " d-flex flex-column flex-md-column-reverse" : ""
        }`}
      >
        <div className="news-thumb">
          <Image src={newImage} alt="news" width={292} height={343} />
        </div>
        <div className="news-content">
          <span>{moment(publishedDate).format("D MMM, YYYY")}</span>
          <ul>
            <li>
              <i className="fa fa-user-circle"></i> {author?.split(" ")?.[0]}
            </li>
            <li>
              <i className="fa fa-comments-o"></i> {comments?.length} Comments
            </li>
          </ul>
          <h3 className="title">{title}</h3>
          <Link href="/single-news">
            <i className="flaticon-next"></i>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default NewsItem;
