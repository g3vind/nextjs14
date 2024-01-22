import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";
/*-------------------FETCH DATA WITH AN API---------------------- */
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something went wrong in fetching the api");
  }
  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post?.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
