import useFetch from "../components/useFetch";
import Bloglist from "../components/Bloglist";

const Home = () => {
  const {
    // Turn data as Blogs
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
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
      {blogs && <Bloglist blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

//--------- Lesson 6 to 7 ---------//

{
  /* <button onClick={handleClick}>Click on Me</button>
<button onClick={(e) => handleClickAgain("Sholeh", e)}>
  Click Me Again!
</button> */
}
{
  /* <button
  onClick={() => {
    console.log("Bisa Buat Logout Pake Ini!");
  }}
>
  Logout
</button> */
}

//--------- Lesson 8 to 9 ---------//

// const Home = () => {
//   const [name, setName] = useState("assyatier");
//   const [age, setAge] = useState(23);
//   const handleClick = () => {
//     setName("Assyatier21");
//     setAge(22);
//   };

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>
//         {name} is {age} years old
//       </p>
//       <button onClick={handleClick}>Click on Me</button>
//     </div>
//   );
// };

// export default Home;

// Blog witg Filter
{
  /* <Bloglist
        blogs={blogs.filter((blog) => blog.author === "Assyatier")}
        title="Assyatier's Blogs"
      /> */
}

// Set Timeout Example
// setTimeout(() => {
//   fetch("http://localhost:8000/blogs")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       setBlogs(data);
//       setIsLoading(false);
//     });
// }, 1000);
