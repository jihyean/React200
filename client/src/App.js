import React from 'react';
import './App.css';
import PropsObjval from './PART2/R020_PropsObjVal'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/** ObjectJson 변수와 key값 선언 후 value 할당하여 props에 담아 하위 컴포넌트에 전달 */}
      <PropsObjval ObjectJson = {{react:"리액트", twohundred:"200"}} />
    </div>
  );
}

export default App;
