import { useEffect, useState } from "react";
import { styles } from "./viewport.css";
const ViewPort = () => {
  const [size, setSize] = useState({width: window.screen.width, height: window.screen.height});
  const classes = styles();
  useEffect(() => {
    const updateWindow = () => {
      let { innerWidth, innerHeight } = window;
      setSize({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener("resize", updateWindow);
    return () => {
      window.removeEventListener("resize", updateWindow);
    };
  });
  return (
    <div className={classes.style}>
      <h1>
        Your ViewPort size is:
      </h1>
      <div>
        {size.width} px x {size.height} px
      </div>
      <hr />
    </div>
  );
};
export default ViewPort;
