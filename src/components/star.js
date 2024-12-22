// import React from "react";
// import { FaStar } from "react-icons/fa";

// export default function Star( props) {
//   return <FaStar 
//         color={props.selected ? "red" : "grey"}
//         onClick={props.onSelect} 
//         />;
// }
import React from "react";
import { FaRegStar } from "react-icons/fa";

export default function Star( props) {
  console.log (props.selected)
  return <FaRegStar 
        color={props.selected ? "#7863FE" : "#dddddd"}
        onClick={props.onSelect} 
        />;
}
