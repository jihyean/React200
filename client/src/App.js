import React from 'react';
import './App.css';
import ReactHook from './PART2/R031_ReactHook'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* 함수형 컴포넌트에서 클래스형처럼 state, 생명주기 함수와 같은 기능을 사용하기 위해 hook 사용
      hook 함수: useState(), useEffect() */}
      <ReactHook />
    </div>
  );
}

export default App;
