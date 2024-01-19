import styles from "./singlePost.module.css";
import Image from "next/image";
const SinglePostPage = () => {
  return (
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
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="./postcard.jpg"
            alt="avatar"
            fill
            className={styles.avatar}
          />
        </div>

        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>Date</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.01.2000</span>
        </div>
        <div className={styles.content}></div>
      </div>
    </div>
  );
};
export default SinglePostPage;
