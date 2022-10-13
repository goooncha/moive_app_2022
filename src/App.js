// import React from "react";
// import Macaron from "./Macaron";
// import cakes from './cakes.json';


// //컴포넌트 기반 각각 컴포넌트를 app컴포넌트에 추가 ("rcc" 로 쉽게 생성 가능)
// function App() {
//   return (
//     <>
//     <div className="app">안녕하세요!</div>
//     {cakes.map(cake =>(
//       <Macaron 
//       //props
//         propsid = {cake.id}
//         propsname = {cake.name}
//         propsimage = {cake.image}
//       />
//     ))}

//     </>
//   );
// }

// export default App;

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props){
//     super(props);
//     console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨');
//   }

//   componentDidMount(){
//     console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수');
//   }

//   componentDidUpdate(){
//     console.log('componentDidUpdate함수는 화면이 새로 그려지면 즉 업데이트 되면 실행되는 함수');
//   }

//   componentWillUnmount(){
//     console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수');
//   }

//   state ={
//     count: 0,
//     sum: 0,
//     avg: 0,
//   };

//   add = () =>{
//     console.log("더하기");
//     //this.state.count = 1;
//     this.setState(current => ({
//       count : current.count + 1
//     }));
//   }

//   minus = () =>{
//     console.log("빼기");
//     // this.state.count = -1;
//     this.setState(current => ({
//       count : current.count - 1
//     }));
//   }

  
//   render() {
//     return (
//       <div>
//         <h1>현재 숫자는 {this.state.count} 입니다</h1>
//         <button onClick={this.add}>더하기</button>
//         <button onClick={this.minus}>빼기</button>

        
//       </div>
//     )
//   }
// }





// import React from 'react'
// import Cake from './cake'

// export default function App() {
//   return (
//     <>
//         <div>
//          <h1>현재 숫자는 {this.state.count} 입니다</h1>
//          <button onClick={this.add}>더하기</button>
//          <button onClick={this.minus}>빼기</button>       
//     </div>
//     <Cake />
//     </>
//   )
// }

import React from 'react'
import Home from './routes/Home'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import About from './routes/About'
import Detail from './routes/Detail'
import Movie from './components/Movie'



export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
         {/* 주소끝이 '/' 이면 <Home> 컴포넌트 호출 */}
        <Route path='/about' element={<About />} />
        <Route path='/detail' element={<Detail />} />
        
      </Routes>

    </BrowserRouter>
  )
}

