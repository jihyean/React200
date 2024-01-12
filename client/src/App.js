import React from 'react';
import './App.css';
import PropsDefault from './PART2/R022_PropsDefault'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* props의 기본값은 부모 컴포넌트에서 값이 넘어오지 않았을때 사용 */}
      {/** ReactNumber 변수에 값 200을 할당하여 props에 담아 하위 컴포넌트에 전달 */}
      <PropsDefault ReactNumber={200} />
    </div>
  );
}

export default App;
