import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
  return (
    <section className="container home-items py-5">
      <h2 className="text-center my-4">BLOGS</h2>
      <Row xs={1} md={3} className="g-4">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </Row>
    </section>
  );
};

export default Blogs;
