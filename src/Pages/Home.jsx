import axios from "axios";
import AnimationWrapper from "../Common/page-animation";
import { useEffect, useState, useRef } from "react";
import Loader from "../components/Loader";
import BlogPostCard from "../components/BlogCard";
import NoDataMessage from "../Pages/Nopage";

const HomePage = () => {
    const [blogs, setBlogs] = useState(null);
    const [trendingBlogs, setTrendingBlogs] = useState(null);
    const [pageState, setPageState] = useState("home");

    const categories = [
        "general",
        "menadhd",
        "womenadhd",
        "kidsadhd",
        "other"
    ];

    const activeTabRef = useRef(null);

    const fetchLatestBlogs = ({ page = 1 }) => {
        axios
            .post(import.meta.env.VITE_SERVER_DOMAIN + "/latest-blogs", { page })
            .then(({ data }) => {
                setBlogs(data.blogs);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const fetchBlogsByCategory = ({ page = 1 }) => {
        axios
            .post(import.meta.env.VITE_SERVER_DOMAIN + "/search-blogs", { tag: pageState, page })
            .then(({ data }) => {
                setBlogs(data.blogs);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const fetchTrendingBlogs = () => {
        axios
            .get(import.meta.env.VITE_SERVER_DOMAIN + "/trending-blogs")
            .then(({ data }) => {
                setTrendingBlogs(data.blogs);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const loadBlogByCategory = (e) => {
        let category = e.target.innerText.toLowerCase();

        setBlogs(null);

        if (pageState === category) {
            setPageState("home");
            return;
        }

        setPageState(category);
    }

    useEffect(() => {
        if (activeTabRef.current) {
            activeTabRef.current.click();
        }

        if (pageState === "home") {
            fetchLatestBlogs({ page: 1 });
        } else {
            fetchBlogsByCategory({ page: 1 });
        }

        if (!trendingBlogs) {
            fetchTrendingBlogs();
        }
    }, [pageState]);

    return (
        <AnimationWrapper>
            <section className="h-cover flex justify-center gap-10">
                {/* latest blogs */}
                <div className="w-full">
                    <InPageNavigation
                        routes={[pageState, "trending blogs"]}
                        defaultHidden={["trending blogs"]}
                    >
                        <>
                            {blogs === null ? (
                                <Loader />
                            ) : (
                                blogs.length ?
                                    blogs.map((blog, i) => (
                                        <AnimationWrapper
                                            transition={{
                                                duration: 1,
                                                delay: i * 0.1,
                                            }}
                                            key={i}
                                        >
                                            <BlogPostCard
                                                content={blog}
                                                author={blog.author.personal_info}
                                            />
                                        </AnimationWrapper>
                                    ))
                                    : <NoDataMessage message="No blogs published" />
                            )}
                            <LoadMoreDataBtn state={blogs} fetchDataFun={(pageState === "home" ? fetchLatestBlogs : fetchBlogsByCategory)} />
                        </>

                        {trendingBlogs === null ? (
                            <Loader />
                        ) : (
                            trendingBlogs.length ?
                                trendingBlogs.map((blog, i) => (
                                    <AnimationWrapper
                                        transition={{
                                            duration: 1,
                                            delay: i * 0.1,
                                        }}
                                        key={i}
                                    >
                                        <MinimalBlogPost
                                            blog={blog}
                                            index={i}
                                        />
                                    </AnimationWrapper>
                                ))
                                : <NoDataMessage message="No trending blogs" />
                        )}
                    </InPageNavigation>
                </div>

                {/* filters and trending blogs */}
                <div className="min-w-[40%] lg:min-w-[400px] max-w-min border-l border-grey pl-8 pt-3 max-md:hidden">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h1 className="font-medium text-xl mb-8">
                                Stories form all interests
                            </h1>

                            <div className="flex gap-3 flex-wrap">
                                {categories.map((category, i) => (
                                    <button
                                        onClick={loadBlogByCategory}
                                        className={"tag " + (pageState === category ? " bg-black text-white " : " ")}
                                        key={i}
                                        ref={pageState === category ? activeTabRef : null}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h1 className="font-medium text-xl mb-8">
                                Trending
                                <i className="fi fi-rr-arrow-trend-up"></i>
                            </h1>

                            {trendingBlogs === null ? (
                                <Loader />
                            ) : (
                                trendingBlogs.length ?
                                    trendingBlogs.map((blog, i) => (
                                        <AnimationWrapper
                                            transition={{
                                                duration: 1,
                                                delay: i * 0.1,
                                            }}
                                            key={i}
                                        >
                                            <MinimalBlogPost
                                                blog={blog}
                                                index={i}
                                            />
                                        </AnimationWrapper>
                                    ))
                                    : <NoDataMessage message="No trending blogs" />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </AnimationWrapper>
    );
};

export default HomePage;
