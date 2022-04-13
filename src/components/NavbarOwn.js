const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Assyatier Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "grey",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
