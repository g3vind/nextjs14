"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTest = () => {
  // --------------CLIENT SIDE NAVIGATION-------------------
  const pathName = usePathname();
  //   pathname only shows pathnames like "/action" and no queries
  console.log("Pathname Hook", pathName); // Pathname Hook /navigationtest
  const router = useRouter();

  const searchParmas = useSearchParams();
  const q = searchParmas.get("q");
  console.log(q); // "test"

  const handlePush = () => {
    router.push("/");
  };

  const handleReplace = () => {
    // use replace it'll not add a new entry in the browser history stack
    router.replace("/");
  };
  const handleRefresh = () => {
    router.refresh();
  };
  const handleBack = () => {
    router.back();
  };
  const handleForward = () => {
    router.forward();
  };
  return (
    <div>
      {/* defalult behavior of Link is prefetching url i.e. on hover it will prefetch the path */}
      {/* but if you have many links disabling prefetching is a better choice for performance issues */}
      <Link href="/" prefetch={false}>
        Back To Home
      </Link>
      {/* -------------REDIRECTING----------------- */}
      <button onClick={handlePush}>Redirect Button Push</button>
      <button onClick={handleReplace}>Redirect Button Replace</button>
      <button onClick={handleRefresh}>Refresh Page</button>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleForward}>Forward</button>
    </div>
  );
};

export default NavigationTest;
