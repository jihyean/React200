import React from 'react';
import './App.css';
import ShallowEqual from './PART2/R029_ShallowEqual'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* PureComponent에서 state값의 변경을 비교하는 것과 동일한 기능 함수 제공 */}
      {/* shallowEqualArrays() 함수 사용시 문자열과 배열은 값만 비교 */}
      {/* 객체는 PureComponent와 동일하게 참조 값을 비교한다 */}
      <ShallowEqual />
    </div>
  );
}

export default App;
