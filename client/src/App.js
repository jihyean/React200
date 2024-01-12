import React from 'react';
import './App.css';
import PureComponentClass from './PART2/R028_PureComponentClass'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* class형 컴포넌트 2가지: 1.Component 2.PureComponent */}
      {/* 두 컴포넌트 모두 props와 state의 변경에 따라 render() 함수 사용 */}{/* 둘의 변경 기준이 다름 */}
      {/* 2.PureComponent 에서는 비교 대상의 값을 비교해 동일하지 않을시 -> 변경 발생 */}{/* 불필요한 render()함수 호출↓, 페이지 성능↑ */}
      <PureComponentClass />
    </div>
  );
}

export default App;
