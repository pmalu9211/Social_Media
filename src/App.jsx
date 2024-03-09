import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { useContext } from "react";
import PostListProvider from "./components/store/post-list-store";
import Content from "./components/Content";
import { PostList as data } from "./components/store/post-list-store";
import Icon from "./components/Icon";
function App() {
  return (
    <>
      <PostListProvider>
        <div className="Contain">
          <Sidebar></Sidebar>
          <Icon></Icon>

          <Content></Content>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
