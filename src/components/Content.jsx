import { useContext } from "react";
import CreatePost from "./CreatePost";
import Errormsg from "./Errormsg";
import Footer from "./Footer";
import PostList from "./PostList";
import Header from "./header";
import { PostList as data } from "./store/post-list-store";

const Content = () => {
  const { selectedTab } = useContext(data);
  return (
    <div className="Content">
      <Header></Header>
      <div className="box">
        {selectedTab === "Home" ? (
          <>
            <PostList></PostList>
            <Errormsg></Errormsg>
          </>
        ) : (
          <CreatePost></CreatePost>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Content;
