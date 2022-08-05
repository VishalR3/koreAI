import { useDispatch } from "react-redux";
import { deletePost } from "../../store/features/globalSlice";

function Post({ post, index }) {
  const dispatch = useDispatch();
  const handleDelete = (idx) => {
    dispatch(deletePost(idx));
  };
  return (
    <div className={`post postType-${post.templateNo}`}>
      <div className="post-heading">{post.heading}</div>
      <div className="post-discount">{post.discount}</div>
      <div className="post-img">
        <img src={post.path} className="postImg img-fluid" alt={post.heading} />
      </div>
      <div className="post-actions justify-content-center">
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary editBtn me-3">Edit</button>
          <button className="btn deleteBtn" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Post;
