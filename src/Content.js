import { useEffect, useRef, useState } from "react";
import TabContent from "./TabContent";

export default function Content() {
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
    // console.log(spanCounterRef.current);
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

      <TabContent />
    </div>
  );
}
