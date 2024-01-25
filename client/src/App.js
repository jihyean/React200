import React from 'react';
import './App.css';
import ReactHoc1 from './PART3/R075_ReactHoc1'
import 'bootstrap/dist/css/bootstrap.css'

// 함수 자체를 인자로 받거나 반환하는 함수를 '고차 함수'라고 함
// 컴포넌트를 인자로 받거나 반환하는 함수를 '고차 컴포넌트'라고 함
function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactHoc1 />
    </div>
  );
}

export default App;
