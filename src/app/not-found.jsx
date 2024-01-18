import Link from "next/link";
const NotFound = () => {
  return (
    <>
      <h2>Not Found</h2>
      <p>Sorry the page you are looking for doesn't exists</p>
      <Link href="/">Back to Home</Link>
    </>
  );
};
export default NotFound;
