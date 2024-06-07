import React, { useContext } from 'react';
import myContext from '../context/myContext';
import { blogPosts } from '../Data/data'; 

function AllBlogs() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto max-w-7xl">
                {/* Top Heading */}
                <div className="mb-5">
                    <h1 className="text-center text-2xl font-bold"
                        style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                        All Blogs
                    </h1>
                </div>
                {/* Main Content */}
                <div className="flex flex-wrap justify-center -m-4 mb-5">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="p-4 md:w-1/3">
                            <div
                                style={{
                                    background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white',
                                    borderBottom: mode === 'dark' ? '4px solid rgb(226, 232, 240)' : '4px solid rgb(30, 41, 59)'
                                }}
                                className={`h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                ${mode === 'dark' ? 'shadow-gray-700' : 'shadow-xl'}
                                rounded-xl overflow-hidden`}>
                                {/* Blog Thumbnail */}
                                <img className="w-full" src={post.image} alt="blog" />
                                {/* Top Items */}
                                <div className="p-6">
                                    {/* Blog Date */}
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                                        color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)'
                                    }}>
                                        {post.date}
                                    </h2>
                                    {/* Blog Author */}
                                    <h1 className="author-font text-sm font-bold text-gray-400 mb-3" style={{
                                        color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)'
                                    }}>
                                        {post.name}
                                    </h1>
                                    {/* Blog Category */}
                                    <h1 className="category-font text-lg font-bold text-gray-900 mb-3" style={{
                                        color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)'
                                    }}>
                                        {post.category.charAt(0).toUpperCase() + post.category.slice(1) + ' ADHD'}
                                    </h1>
                                    {/* Blog Title */}
                                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                                        color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)'
                                    }}>
                                        {post.title}
                                    </h1>
                                    {/* Blog Description */}
                                    <p className="leading-relaxed mb-3" style={{
                                        color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)'
                                    }}>
                                        {post.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AllBlogs;
