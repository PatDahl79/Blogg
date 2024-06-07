import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import AnimationWrapper from "../Common/page-animation";
import Loader from "../components/Loader";
import BlogPostCard from "../components/BlogCard";
import NoDataMessage from "../Pages/Nopage";
import InPageNavigation from "../components/inpage-navigation.component"; // Ensure this is the correct import

const HomePage = () => {
  const [blogs, setBlogs] = useState(null);
  const [trendingBlogs, setTrendingBlogs] = useState(null);
  const [pageState, setPageState] = useState("home");

  const fetchLatestBlogs = async (page = 1) => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_SERVER_DOMAIN}/latest-blogs`, { page });
      setBlogs(data.blogs);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBlogsByCategory = async (page = 1) => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_SERVER_DOMAIN}/search-blogs`, { tag: pageState, page });
      setBlogs(data.blogs);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTrendingBlogs = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/trending-blogs`);
      setTrendingBlogs(data.blogs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (pageState === "home") {
      fetchLatestBlogs();
    } else {
      fetchBlogsByCategory();
    }
    if (!trendingBlogs) {
      fetchTrendingBlogs();
    }
  }, [pageState, trendingBlogs]);

  return (
    <AnimationWrapper>
      <section className="h-cover flex justify-center gap-10">
        <div className="w-full">
          <InPageNavigation
            routes={[pageState, "trending blogs"]}
            defaultHidden={["trending blogs"]}
          >
            <>
              {blogs == null ? (
                <Loader />
              ) : blogs.length ? (
                blogs.map((blog, i) => (
                  <AnimationWrapper key={i} transition={{ duration: 1, delay: i * 0.1 }}>
                    <BlogPostCard content={blog} author={blog.author.personal_info} />
                  </AnimationWrapper>
                ))
              ) : (
                <NoDataMessage message="No blogs published" />
              )}
            </>
            {trendingBlogs == null ? (
              <Loader />
            ) : trendingBlogs.length ? (
              trendingBlogs.map((blog, i) => (
                <AnimationWrapper key={i} transition={{ duration: 1, delay: i * 0.1 }}>
                  <MinimalBlogPost blog={blog} index={i} />
                </AnimationWrapper>
              ))
            ) : (
              <NoDataMessage message="No trending blogs" />
            )}
          </InPageNavigation>
        </div>
        {/* Other sections of your component */}
      </section>
    </AnimationWrapper>
  );
};

export default HomePage;
