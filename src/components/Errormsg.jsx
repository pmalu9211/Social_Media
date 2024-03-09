import { useContext } from "react";
import { PostList } from "./store/post-list-store";

const Errormsg = () => {
  const { postList } = useContext(PostList);
  return <>{postList.length === 0 && <h1>Make some post</h1>}</>;
};

export default Errormsg;
