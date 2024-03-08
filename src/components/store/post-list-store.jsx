import { createContext, useReducer, useRef } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

let postListReducer = (postList, action) => {
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

let defaultValue = [
  {
    Title: "Hello",
    Body: "I am gay",
    Likes: 30,
    Hashtags: ["Awosome", "Gay", "Love"],
    id: "1",
    userId: "pratham",
  },
  {
    Title: "Davis",
    Body: "I am not gay",
    Likes: 1130,
    Hashtags: ["Awosome", "NotGay", "Love"],
    id: "2",
    userId: "prathamalu",
  },
];

const PostListProvider = ({ children }) => {
  const count = useRef(0);
  const [postList, postListDispatch] = useReducer(
    postListReducer,
    defaultValue
  );

  const addPost = (Title, Body, Tags, UserID, Likes) => {
    const obj = {
      action: "ADD",
      payload: {
        Title: Title,
        Body: Body,
        Likes: Likes,
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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
