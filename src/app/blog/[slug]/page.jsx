import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong in fetching the api");
  }
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="/postcard.jpg"
            alt="Post Card"
            fill
            className={styles.img}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>

            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published </span>
              <span className={styles.detailValue}>01.01.2000</span>
            </div>
          </div>

          <div className={styles.content}>{post.body}</div>
        </div>
      </div>
    </>
  );
};
export default SinglePostPage;
