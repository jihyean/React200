import React from 'react';
import './App.css';
import SetState from './PART2/R025_SetState'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* this.state.변수명=value와 같이 state를 직접 변경 -> render() 함수 미호출 -> 화면 출력의 state 값은 미변경 */}
      {/* setState() 함수로 변경 -> render() 함수 호출 -> 변경된 값 화면표시 */}
      <SetState />
    </div>
  );
}

export default App;
