// import React, {Component} from 'react';
// import './App.css';
// // import Columes from './Layout/Columes';
// import Nodes from './Layout/Nodes';

// class App extends Component {
//     constructor(props) {
//       super(props);
//         this.state = {
//             nodes: Nodes,
//             name: 'Cung'
//         }
//     }

//     showLayout = () => {
//         return Nodes.map((node, key) => {
//             return (
//                 <div>
//                     <hr/>
//                     id: {
//                     node.id
//                 }
//                     <br/>
//                     name: {
//                     node.name[2]
//                 } </div>
//             )
//         });
//     }

//     render() {
//         return (
//             <div className="row">
//                 {
//                 this.showLayout()
//             }
//                 {/* name: {this.state.name} */} </div>
//         )
//     }
// }

// export default App;

import React, { useState } from 'react';

function Example() {
  // Khai báo 1 biến số đếm, gọi là "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Bấm vào tôi
      </button>
    </div>
  );
}
