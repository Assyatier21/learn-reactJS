import { useParams, useHistory } from "react-router-dom";
import useFetch from "../components/useFetch";

const Blogdetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const router = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      router.push("/");
    });
  };
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && (
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Loading Data...</h1>
        </div>
      )}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            Written by <b>{blog.author}</b>
          </p>
          <p style={{ marginBottom: "15px" }}>{blog.body}</p>
          <button onClick={handleDelete}>Delete Post</button>
        </article>
      )}
    </div>
  );
};

export default Blogdetails;
