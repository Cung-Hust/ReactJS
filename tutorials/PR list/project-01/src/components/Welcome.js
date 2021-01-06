// //Import react vào trong dự án
// import React from "react";
 
// const Welcome = function(props) {
//   return (
//     <div>
//       <h1>Welcome ! I am a functional component </h1>
//     </div>
//   )
// }
 
// export default Welcome;

import React, { Component } from "react";
class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome ! I am a class component </h1>
      </div>
    );
  }
}
export default Welcome; 