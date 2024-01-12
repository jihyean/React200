import React from 'react';
import './App.css';
import PropsBoolean from './PART2/R019_PropsBoolean'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/** props로 boolean 형으로 하위 컴포넌트에 할당시 true나 false로 할당, 미할당시 true가 기본값 */}
      <PropsBoolean BooleanTrueFalse={false} /> 
      <PropsBoolean BooleanTrueFalse />
    </div>
  );
}

export default App;
