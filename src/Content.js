import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

export default function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

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

  return (
    <div>
      <h1>Hello world</h1>
      <div>
        {tabs && tabs.map((tab) => 
          <button  
          style={type===tab ? {
            backgroundColor: 'black',
            color: 'white'
          } : {}}
          onClick={() => setType(tab)}>{tab}</button>
        )}
      </div>
      <input onChange={(e) => setTitle(e.target.value)} />

      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.title || post.name}</li>)}
      </ul>
    </div>
  );
}
