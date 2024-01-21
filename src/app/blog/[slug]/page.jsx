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
            src="/noavatar.png"
            alt="avatar"
            fill
            className={styles.avatar}
          />
        </div>

        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author: </span>
          <span className={styles.detailValue}>John Doe</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published: </span>
          <span className={styles.detailValue}>01.01.2000</span>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          placeat. Ipsa aliquam veritatis amet voluptatibus, nesciunt inventore
          omnis quasi quae. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Aperiam, commodi vero quis unde quo molestiae, quisquam aut
          explicabo cupiditate odit optio id magni provident! Cum, veniam
          tenetur autem ipsa fugit unde odio quas nobis culpa quo? Labore harum
          nihil commodi esse consequuntur tempore consectetur enim iste.
          Possimus neque, voluptates vero consequatur laborum consequuntur! Quis
          consequatur iusto alias. Minima pariatur reprehenderit hic placeat
          iste quaerat totam fuga laborum magni ipsum expedita voluptatum
          tenetur, ab distinctio provident maxime, eaque in dolores! Consectetur
          quia minima alias consequatur repudiandae voluptatum facilis ullam
          tempora suscipit enim facere, placeat, architecto autem laborum neque,
          voluptates ipsa nulla perferendis eaque nemo eius rem cum quod quas.
          Laboriosam ad exercitationem numquam delectus autem officiis dicta.
          Iste ipsum, debitis amet, aliquam aut nobis ad doloremque dolorem odio
          praesentium culpa. Rerum numquam quaerat eum repellat odio quis
          eligendi, quod dolore molestiae incidunt sequi minus voluptates, iusto
          reprehenderit fugiat hic at odit ex. Maxime atque beatae minus?
          Cupiditate fuga, in, provident tempore ipsam, non aliquam commodi at
          inventore libero natus magni est eveniet harum et explicabo nihil
          suscipit sunt? Tenetur illum fugit veritatis non ullam assumenda
          deserunt laboriosam, corporis voluptate culpa nam autem facere
          voluptates dolore in sint, eligendi quidem, laudantium optio!
        </div>
      </div>
    </div>
  );
};
export default SinglePostPage;
