import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>NextBlogs</div>
      <div className={styles.text}>Next Blogs © All rights reserved.</div>
    </div>
  );
};

export default Footer;
