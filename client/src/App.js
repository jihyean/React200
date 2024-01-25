import React from 'react';
import './App.css';
import ReactCurrying from './PART3/R074_ReactCurrying'
import 'bootstrap/dist/css/bootstrap.css'

// 커링(Currying)은 함수를 재사용성을 높이기 위해 함수 자체를 return한다
// 함수 하나만 사용할 때는 필요한 파라미터를 한 번에 넣어야 한다
// 커링을 사용하면 함수를 분리하여 필요한 파라미터를 나눠서 넣을 수 있다
function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactCurrying />
    </div>
  );
}

export default App;
