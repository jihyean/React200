import React, { Component } from 'react';

class R026_ForceUpdate extends Component {
  constructor (props) {
    super(props);
    this.state = {
        StateString: 'react', // 초기값으로 'react' 문자열 저장
    }
  }

  StateChange = () => {
    this.state.StateString = '리액트';  // 값 직접 변경
    this.forceUpdate();                 // 화면 강제 새로고침 -> render() 함수 호출 -> 변경된 state값 화면 반영
  }

  // constructor 함수 실행 후 render() 함수 실행 -> state 값 초기값 지정
  render() {
    return (
    <div style={{padding: "0px"}}>
      <button onClick={(e) => this.StateChange(e)}>state 직접 변경</button><br/>
      [state 변경하기] StateString : {this.state.StateString}
    </div>
    )
  }
}

export default R026_ForceUpdate;
