import { memo } from "react";

function DemoMemo({ onClick }) {
  console.log("Render DemoMemo");
  return (
    <>
      <h1>Demo memo & useCallback()</h1>
      <button onClick={onClick}>useCallback</button>
    </>
  );
}

// memo & useCallback to ONLY render this component
// when there is no change in props
export default memo(DemoMemo);
