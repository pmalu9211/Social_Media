import { useContext, useRef } from "react";
import { PostList } from "./store/post-list-store";

const CreatePost = () => {
  const Title = useRef("");
  const Body = useRef("");
  const Tags = useRef("");
  const UserID = useRef("");
  const Likes = useRef(0);
  const { addPost } = useContext(PostList);

  const Submit = (event) => {
    event.preventDefault();
    const titleData = Title.current.value;
    Title.current.value = "";
    const bodyData = Body.current.value;
    Body.current.value = "";
    const tagsData = Tags.current.value;
    Tags.current.value = "";
    const userIDData = UserID.current.value;
    UserID.current.value = "";
    const likesData = Likes.current.value;
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
