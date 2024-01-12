import React from 'react';
import './App.css';
import ReactState from './PART2/R024_ReactState'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* props: 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할때 사용 */}
      {/* state: 하나의 컴포넌트 안에서 전역변수처럼 사용 */}
      <ReactState reactString={"react"}/>
    </div>
  );
}

export default App;
