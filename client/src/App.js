import React from 'react';
import './App.css';
import ComponentClass from './PART2/R027_ComponentClass'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* class형 컴포넌트 2가지: 1.Component 2.PureComponent */}
      {/* 두 컴포넌트 모두 props와 state의 변경에 따라 render() 함수 사용 */}{/* 둘의 변경 기준이 다름 */}
      {/* 1.Component 에서는 비교 대상이 완전히 동일하지 않을시 -> 변경 발생 */}
      <ComponentClass />
    </div>
  );
}

export default App;
