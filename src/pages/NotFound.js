import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="title-not-found">404 NOT FOUND</h1>
      <h4>
        <Link to="/">Back to Home</Link>
      </h4>
    </div>
  );
};

export default NotFound;
