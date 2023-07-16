import { useRouter } from "next/router";
import Posts from "./posts";
import GuestBook from "./guestbook";
import BlogLayout from "./BlogLayout";

export default function Blog() {
  const router = useRouter();
  let content;

  if (router.pathname === "/blog/guestbook") {
    content = <GuestBook />;
  } else if (router.pathname === "/blog/posts") {
    content = <Posts />;
  } else if (router.pathname === "/blog") {
    content = null;
  }

  return (
    <BlogLayout>
      <div>{content && <div>{content}</div>}</div>
    </BlogLayout>
  );
}
