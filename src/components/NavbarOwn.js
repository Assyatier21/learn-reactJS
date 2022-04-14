import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Assyatier Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "grey",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
