import React from 'react';
import './App.css';
import Props from './PART2/R017_Props'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/** 하위 컴포넌트 R017_Props에 전달할 props 변수(props_val)에 값(THIS IS PROPS) 저장 */}
      <Props props_val = "THIS IS PROPS"/> 
    </div>
  );
}

export default App;
