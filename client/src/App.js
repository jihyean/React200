import React from 'react';
import './App.css';
import ReturnMap from './PART2/R033_ReturnMap'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* 반복해서 출력해야 하는 element들을 배열에 넣어두고 map() 함수로 순서대로 나열해 컴포넌트 return */}
      <ReturnMap />
    </div>
  );
}

export default App;
