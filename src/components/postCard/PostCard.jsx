import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./postcard.module.css";

const PostCard = () => {
  return (
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
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure in
          voluptates minima cum
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
