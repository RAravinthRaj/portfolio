import React from "react";
import BlogCard from "../Components/BlogCard";

const Blog = ({val}) => {
  const data = val;

  return (
    <div className="space-y-4">
      <div className="text-3xl text-white md:text-8xl font-bebas font-extrabold text-center mb-10 drop-shadow-[0_0_5px_white]">
        My Little Blog
      </div>
      <div>
        <div className="m-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((d) => (
            <BlogCard im={d.image} he={d.heading} p={d.content} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Blog;
