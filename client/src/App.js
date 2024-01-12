import React from 'react';
import './App.css';
import PropsNode from './PART2/R023_PropsNode'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* props를 하위 컴포넌트 태그 안쪽에 선언하는 방법외에도 하위 컴포넌트 태그 사이에 작성도니 node를 전달할 수 있다 */}
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
  );
}

export default App;
