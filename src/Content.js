import { useEffect, useRef, useState } from "react";

const tabs = ["posts", "comments", "albums"];

export default function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoTop, setShowGoTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);

  const [avatar, setAvatar] = useState();

  useEffect(() => {
    // this clean func is called before avatar is updated
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handleSelectAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    console.log(file.preview);
    setAvatar(file);
  };

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // clean func
    return () => {
      clearInterval(timer);
    };
  }, []);

  const lessons = [
    {
      id: 1,
      title: "Lesson 1",
    },
    {
      id: 2,
      title: "Lesson 2",
    },
    {
      id: 3,
      title: "Lesson 3",
    },
  ];

  const [activeLesson, setActiveLesson] = useState(1);
  useEffect(() => {
    const handleEvent = ({ detail }) => {
      console.log(detail);
    };

    // add event listener
    window.addEventListener(`lesson-${activeLesson}`, handleEvent);

    return () => {
      // remove event handler before changing the activeLession
      window.removeEventListener(`lesson-${activeLesson}`, handleEvent);
    };
  }, [activeLesson]);

  const [clock, setClock] = useState(60);

  // useRef() + useEffect() to keep previous state
  // get previous clock
  // because when clock is change,
  // it will re-call this component to render UI
  // after that it run code in side useEffect to
  // update prevSecond
  // result: prevSecond is always keep the previous state of count
  const prevSecond = useRef();
  useEffect(() => {
    prevSecond.current = count;
  }, [count]);
  //   console.log(prevSecond.current, count);

  // useRef() use to keep Interval ID to clean up it later
  const timerId = useRef();

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setClock((prev) => prev - 1);
    }, 1000);

    console.log("start", timerId);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("stop", timerId);
  };

  // useRef() for DOM element
  const spanCounterRef = useRef();
  useEffect(() => {
    console.log(spanCounterRef.current);
    spanCounterRef.current.style.color = "red";
  }, []);

  return (
    <div>
      <h1>Hello world</h1>

      <div>
        Count down (seconds):
        <span ref={spanCounterRef} style={{ fontSize: 20, fontWeight: "bold" }}>
          {" "}
          {clock}
        </span>{" "}
        <button style={{ marginLeft: "5px" }} onClick={handleStart}>
          Start
        </button>
        <button style={{ marginLeft: "5px" }} onClick={handleStop}>
          Stop
        </button>
      </div>

      <div>
        <ul>
          {lessons.map(({ id, title }) => (
            <li
              key={id}
              style={activeLesson === id ? { color: "red" } : {}}
              onClick={() => setActiveLesson(id)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <input
          onChange={handleSelectAvatar}
          type="file"
          name="avatar"
          value=""
        />
        {avatar && (
          <img style={{ width: "50%" }} src={avatar.preview} alt="girls" />
        )}
      </div>

      <h3>Counter (seconds): {count} </h3>
      <p>Previous second: {prevSecond.current}</p>

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
