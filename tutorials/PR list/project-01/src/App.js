import React from 'react';
// import Welcome from './components/Welcome'
// function App() {
//   return (
//     <div>
//         <Welcome />
//         <p>freetuts.net</p>
//     </div>
//   );
// }

// import Clothes from "./Clothes"; //Import component vào
// function App(props) {
//   return (
//     <div>
//       <Clothes name="Jean" type="Skinny" color ="Black" size = "L">Clothes 1</Clothes>
//       <Clothes name="T-Shirt" type="Adidas" color ="Blue" size = "M">Clothes 2</Clothes>
//       <Clothes name="Suit" type="LV" color ="Black" size = "M">Clothes 3</Clothes>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    //Chỉ định một state
    this.state = { index: 0 };
  }
  render() {
    return (
      <div>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Giá trị:&nbsp; {this.state.index}</p>
        <button
          onClick={() => {
            this.setState({
              index: this.state.index - 1
            })
          }}
        >
          Giảm
        </button>
        <button
          onClick={() => {
            this.setState({
              index: this.state.index + 1
            })
          }}
        >
          Tăng &nbsp;
        </button>
      </div>
    );
  }
}

// class App extends React.Component {
//   render() {
//     const {number1, number2} = this.props
//     return (
//       <div>
//         <h1>{number1} + {number2} = {number1 + number2}</h1>
//       </div>
//     );
//   }
// }
// //Chỉ định props mặc định.
// //Ở đây mình cho props number1, number2 là kiểu int
// App.defaultProps = {
//   number1: 4,
//   number2: 2
// }

// import PropTypes from 'prop-types';

// class App extends React.Component {
//   render() {

//     return (
//       <div>
//         <h1>{this.props.name}</h1>
//         <ul>
//           <li>{this.props.type}</li>
//           <li>{this.props.public_year}</li>
//           <li>{this.props.storage}</li>
//         </ul>
//       </div>
//     );
//   }
// }
// // Đúng kiểu dữ liệu
// App.defaultProps = {
//   name: 'iPhone Xs Max',
//   type: 'iPhone',
//   public_year: 2018,
//   storage: '64 GB'
// }

// // Đúng kiểu dữ liệu
// App.defaultProps = {
//   name: 'iPad Mini 2020',
//   type: 'iPad',
//   public_year: 2019,
//   storage: '64 Gb'
// }



// // Sai kiểu dữ liệu vì type phải là các giá
// // trị như iPhone, Ipad, Mac, SmartWatch
// App.defaultProps = {
//   name: 'Airpods 2',
//   type: 'Airpod',
//   public_year: 2019,
//   storage: '16 Gb'
// }

// //Chỉ định validation props
// App.propTypes = {
//   name: PropTypes.string,
//   type: PropTypes.oneOf(["iPhone", "iPad", "Airpod", "Mac", "SmartWatch"]),
//   public_year: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ])
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 1
//     };
//   }
//   countDown() {
//     this.setState({
//       index: this.state.index - 1
//     });
//   }
//   countUp(){
//     this.setState((prevState, props) => {
//       return {
//         index: prevState.index + 1
//       }
//     });
//   }
//   render() {
//     return (
//       <div>
//         <p>Giá trị: {this.state.index}</p>
//         <button onClick={() => this.countDown()}>Down</button>
//         <button onClick={() => this.countUp()}>Up</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 1
//     };
//   }
//   render() {
//     return (
//       <div>
//         <p>Giá trị: {Math.random()}</p>
//         <button onClick={() => this.forceUpdate()}>Reload</button>
//       </div>
//     );
//   }
// }

export default App;
