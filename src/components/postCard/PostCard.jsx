import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./postcard.module.css";

const PostCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image
              src="/postcard.jpg"
              alt="Post Card"
              fill
              className={styles.img}
            />
          </div>
          <span className={styles.date}>11.09.2002</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.body}</p>
          <Link className={styles.link} href={`/blog/${post.id}`}>
            READ MORE
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
