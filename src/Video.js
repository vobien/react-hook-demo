import vid1 from "./videos/vid1.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props, ref) {
  const videoRef = useRef();

  // only expose ref outside with only object {play, pause}
  // don't expose the whole object videoRef anymore
  // make sure encapsulation of component Video
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} width="200px" src={vid1} />;
}

export default forwardRef(Video);
