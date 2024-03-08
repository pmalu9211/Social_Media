import { MdDeleteOutline } from "react-icons/md";
import { PostList } from "./store/post-list-store";
import { useContext, useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { BiSolidLike } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const Post = ({ postList }) => {
  let [flag, setFlag] = useState(false);
  let { deletePost } = useContext(PostList);

  return (
    <div className="card Post" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title Title">
          {postList.Title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill deleteIcon"
            onClick={() => {
              deletePost(postList.id);
            }}
          >
            <AiOutlineDelete />
          </span>
        </h5>
        <p className="card-text Body">{postList.Body}</p>
        {postList.Hashtags.map((value) => (
          <span className="badge rounded-pill text-bg-primary tag" key={value}>
            {value}
          </span>
        ))}
        <div
          className={`Likediv ${flag && "Liked"}`}
          onClick={() => {
            setFlag(!flag);
          }}
        >
          {flag ? (
            <BiSolidLike className="Likebtn" />
          ) : (
            <AiTwotoneLike className="Likebtn" />
          )}
          <span>{flag ? postList.Likes + 1 : postList.Likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
