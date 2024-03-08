import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./components/store/post-list-store";
import Errormsg from "./components/Errormsg";

function App() {
  let [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="Contain">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>
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
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
