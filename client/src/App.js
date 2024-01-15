import React from 'react';
import './App.css';
import FunctionComponent from './PART2/R030_FunctionComponent'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* 함수형은 클래스형 컴포넌트와 달리 state가 없고 생명주기 함수 사용 불가 */}
      {/* 상위 컴포넌트에서 props와 context를 파라미터로 전달받아 사용 */}
      {/* render() 함수가 없음 -> return만 사용하여 화면 구성 */}
      <FunctionComponent contents="[THIS IS FunctionComponent ]" />
    </div>
  );
}

export default App;
