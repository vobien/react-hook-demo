import { useEffect, useRef } from "react";
import Video from "./Video";

function DemoImperativeHandle() {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  });

  const handlePlay = () => {
    ref.current.play();
  };

  const handlePause = () => {
    ref.current.pause();
  };

  return (
    <div>
      <h1>Demo useImpearativeHandle()</h1>
      <p>
        It is used to limit functions relating to ref in react - only expose
        what we need, don't expose the ref itself. Avoid breaking encapsulation
        of function component.
      </p>

      <div>
        <Video ref={ref} />
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}

export default DemoImperativeHandle;
