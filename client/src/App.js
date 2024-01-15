import React from 'react';
import './App.css';
import Fragments from './PART2/R032_Fragments'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* 컴포넌트 단위로 element를 return할 때 하나의 <html> 태그로 전체를 감싸지 않을시 에러 발생 */}
      {/* <Fragments> 태그로 감싸면 불필요한 <html> 태그를 추가하지 않고 사용 가능 */}
      <Fragments />
    </div>
  );
}

export default App;
