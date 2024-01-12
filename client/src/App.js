import React from 'react';
import './App.css';
import PropsRequired from './PART2/R021_PropsRequired'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/** ReactNumber 변수에 값 200을 할당하여 props에 담아 하위 컴포넌트에 전달 */}
      <PropsRequired ReactNumber={200} />
    </div>
  );
}

export default App;
