import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Assyatier");
  const [body, setBody] = useState("");
  const [isLoading, setiIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };
    setiIsLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added!");
      setiIsLoading(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add New Posts</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title : </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Author : </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Assyatier">Assyatier</option>
          <option value="Haniyah">Haniyah</option>
        </select>

        <label>Blog Body : </label>
        <textarea
          required
          cols="30"
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
