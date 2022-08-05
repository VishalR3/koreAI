import Post from "../components/Posts/Post";
import { useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state) => state.global.posts);
  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="row postsRow g-3">
        {posts.map((post, index) => {
          return (
            <div className="col-4" key={index}>
              <Post post={post} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
