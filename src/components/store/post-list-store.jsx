import { createContext, useReducer, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const PostList = createContext({
  selectedTab: "",
  setSelectedTab: () => {},
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  isBig: false,
  flag: false,
  setFlag: () => {},
});

const postListReducer = (postList, action) => {
  if (action.action === "ADD") {
    var regex = /\S/;
    if (regex.test(action.payload.Title)) return [...postList, action.payload];
  } else if (action.action === "DELETE") {
    return postList.filter(function (event) {
      return event.id !== action.payload;
    });
  }
  return postList;
};

const defaultValue = [
  {
    Title: "Sample post",
    Body: "I am excited to built more things like this!!!",
    Likes: 36,
    Hashtags: ["Awosome", "Excited", "Happy"],
    id: "-1",
    userId: "prathamalu",
  },
];

const PostListProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const isBig = useMediaQuery({
    query: "(min-width:760px)",
  });
  const [flag, setFlag] = useState(false);
  const count = useRef(0);
  const [postList, postListDispatch] = useReducer(
    postListReducer,
    defaultValue
  );
  const addPost = (Title, Body, Tags, UserID, Likes) => {
    const regex = /^\d+$/;
    const obj = {
      action: "ADD",
      payload: {
        Title: Title,
        Body: Body,

        Likes: regex.test(Likes) ? parseInt(Likes) : 0,
        Hashtags: Tags.split(" "),
        id: count.current,
        userId: UserID,
      },
    };
    count.current = count.current + 1;
    postListDispatch(obj);
  };

  const deletePost = (id) => {
    const obj = {
      action: "DELETE",
      payload: id,
    };
    postListDispatch(obj);
  };

  return (
    <PostList.Provider
      value={{
        selectedTab,
        setSelectedTab,
        postList,
        addPost,
        deletePost,
        isBig,
        flag,
        setFlag,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
