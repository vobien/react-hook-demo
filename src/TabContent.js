import { useEffect, useState, memo } from "react";

function TabContent() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoTop, setShowGoTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const tabs = ["posts", "comments", "albums"];

  const handleScroll = () => {
    setShowGoTop(window.scrollY >= 500);
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  // add event handler when mounting component
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // console.log("Add event listener");

    window.addEventListener("resize", handleResize);

    // clean up
    return () => {
      //   console.log("Remove event listener");
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // like componentDidUpdate()
  // it runs ONCE when component is mounted
  // AND EVERY time component re-render
  useEffect(() => {
    document.title = title;
  });

  // like componentDidMount()
  // run ONCE when component is mounted
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  // run ONCE when mounting component
  // AND EVERY time the dependencies change
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  console.log("Render TabContent");
  return (
    <div>
      <p>Screen width: {width} px</p>

      <div>
        {tabs &&
          tabs.map((tab) => (
            <button
              key={tab}
              style={
                type === tab
                  ? {
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          ))}
      </div>
      <input onChange={(e) => setTitle(e.target.value)} />

      <ul>
        {posts &&
          posts.map((post) => <li key={post.id}>{post.title || post.name}</li>)}
      </ul>

      {showGoTop && (
        <button
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
          }}
        >
          Go to Top
        </button>
      )}
    </div>
  );
}

export default memo(TabContent);
