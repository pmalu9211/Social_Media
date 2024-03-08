import { useContext, useRef } from "react";
import { PostList } from "./store/post-list-store";

let CreatePost = () => {
  let Title = useRef("");
  let Body = useRef("");
  let Tags = useRef("");
  let UserID = useRef("");
  let Likes = useRef(0);
  let { addPost } = useContext(PostList);

  let Submit = (event) => {
    event.preventDefault();
    let titleData = Title.current.value;
    Title.current.value = "";
    let bodyData = Body.current.value;
    Body.current.value = "";
    let tagsData = Tags.current.value;
    Tags.current.value = "";
    let userIDData = UserID.current.value;
    UserID.current.value = "";
    let likesData = Likes.current.value;
    Likes.current.value = "";
    addPost(titleData, bodyData, tagsData, userIDData, likesData);
  };

  return (
    <form className="CreatePost">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          ref={Title}
          placeholder="Title of the post"
        />
        {/* <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div> */}
      </div>
      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea
          type="text"
          className="form-control"
          ref={Body}
          id="body"
          rows={4}
          placeholder="Content of the Post"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Tags</label>

        <input
          className="form-control"
          ref={Tags}
          placeholder="Separate by comma space ' ' "
        />
      </div>{" "}
      <div className="mb-3">
        <label className="form-label">User ID</label>
        <input
          className="form-control"
          ref={UserID}
          placeholder="What is the user id"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Likes</label>
        <input
          className="form-control"
          ref={Likes}
          placeholder="The number of likes "
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={Submit}>
        Post
      </button>
    </form>
  );
};

export default CreatePost;
