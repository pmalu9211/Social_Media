import { useContext } from "react";
import { PostList as data } from "./store/post-list-store";
import { GoSidebarCollapse } from "react-icons/go";
const Icon = () => {
  const { isBig, flag, setFlag } = useContext(data);

  return (
    <>
      {" "}
      {!isBig && (
        <GoSidebarCollapse
          className="GoSidebarCollapse absolute"
          onClick={() => {
            setFlag(!flag);
          }}
        />
      )}
    </>
  );
};

export default Icon;
