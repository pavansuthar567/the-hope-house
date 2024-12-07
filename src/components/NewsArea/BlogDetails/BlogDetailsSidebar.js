import SearchIcon from "@/components/Header/SearchIcon";
import { blogDetailsSidebar } from "@/data/newsArea";
import handleSubmit from "@/utils/handleSubmit";
import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "src/_services/blog.service";

// const { categories, tags, posts } = blogDetailsSidebar;

const SidebarPostSingle = ({ post = {} }) => {
  const { featuredImage, title, _id } = post;

  return (
    <div className="sidebar__post__single">
      <div className="sidebar__post-image">
        <div className="inner-block">
          <Image
            src={featuredImage}
            alt="Awesome Image"
            width={59}
            height={59}
          />
        </div>
      </div>
      <div className="sidebar__post-content">
        <h4 className="sidebar__post-title">
          <Link href={`/news/${_id}`}>{title}</Link>
        </h4>
      </div>
    </div>
  );
};

const BlogDetailsSidebar = (props) => {
  const { blog = {} } = props;
  const { tags, category } = blog;
  const onSubmit = (data) => console.log(data);

  const dispatch = useDispatch();

  const { blogList: blogs } = useSelector(({ blog }) => blog);

  const loadData = useCallback(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const recentPosts = blogs
    .filter((post) => post._id !== blog._id)
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .slice(0, 5);

  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__search">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sidebar__search-form"
        >
          <input type="text" name="search" placeholder="Search here..." />
          <button type="submit">
            <SearchIcon color="#fff" />
          </button>
        </form>
      </div>
      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category-list">
          {[category].map((category, i) => (
            <li key={i} className="sidebar__category-list-item">
              <Link href="#">{category} </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Recent Posts</h3>
        <div className="sidebar__post-wrap">
          {recentPosts.map((post) => (
            <SidebarPostSingle post={post} key={post?._id} />
          ))}
        </div>
      </div>
      <div className="sidebar__single sidebar__tags">
        <h3 className="sidebar__title">Tags</h3>
        <ul className="sidebar__tags-list">
          {(Array.isArray(tags) ? tags : tags?.split(","))?.map((tag, i) => (
            <li key={i} className="sidebar__tags-list-item me-1">
              <Link href="#">
                {tag}
                {i !== tags?.split(",")?.length - 1 && ", "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetailsSidebar;
