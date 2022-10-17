import { memo } from "react";

function DemoMemo({ onClick }) {
  console.log("Render DemoMemo");
  return (
    <>
      <h1>Demo memo & useCallback()</h1>
      <ul>
        <li>memo: avoid to render a component unnecessarily</li>
        <li>
          useCallback(): avoid to create a new function (reference)
          unnecessarily
        </li>
      </ul>
      <button onClick={onClick}>useCallback</button>
    </>
  );
}

// memo & useCallback to ONLY render this component
// when there is no change in props
export default memo(DemoMemo);
