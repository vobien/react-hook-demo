import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const themeContext = useContext(ThemeContext);

  return <p className={themeContext.theme}>Demo context & useContext()</p>;
}

export default Paragraph;
