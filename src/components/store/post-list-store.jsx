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
    Title: "Sample post",
    Body: "I am excited to built more things like this!!!",
    Likes: 36,
    Hashtags: ["Awosome", "Excited", "Happy"],
    id: "-1",
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
    var regex = /^\d+$/;

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
    console.log(obj.payload.Likes);
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
