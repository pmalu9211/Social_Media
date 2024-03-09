import { useContext } from "react";
import Post from "./Post";
import { PostList as gg } from "./store/post-list-store";

const PostList = () => {
  const { postList } = useContext(gg);

  return (
    <>
      {postList.map((value) => (
        <Post key={value.id} postList={value}></Post>
      ))}
    </>
  );
};

export default PostList;
