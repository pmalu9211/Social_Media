import { useContext } from "react";
import { PostList } from "./store/post-list-store";

const Sidebar = () => {
  const { selectedTab, setSelectedTab, isBig, flag, setFlag } =
    useContext(PostList);
  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar ${
        isBig ? "" : "absolute mob-sidebar"
      } ${flag || isBig ? "visible-sidebar" : "hidden-sidebar"}`}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">{flag || !isBig ? "" : "Social Media"}</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            if (!isBig) {
              setFlag(!flag);
            }

            setSelectedTab("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link hover-effect ${
              selectedTab === "Home" ? "active" : ""
            } text-white`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            if (!isBig) {
              setFlag(!flag);
            }

            setSelectedTab("Create Post");
          }}
        >
          <a
            href="#"
            className={`nav-link hover-effect ${
              selectedTab !== "Home" ? "active" : ""
            } text-white`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
