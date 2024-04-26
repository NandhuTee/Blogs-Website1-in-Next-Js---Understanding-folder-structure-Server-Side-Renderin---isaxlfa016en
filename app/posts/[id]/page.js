import React from "react";
import { useRouter } from "next/router";

function PostDetail() {
  // Complete the function
  const router = useRouter();
  console.log(router);
  console.log(router.query.id);
  return <h1 id={router.query.id}>Post Detail: {router.query.id}</h1>;
}

export default PostDetail;
