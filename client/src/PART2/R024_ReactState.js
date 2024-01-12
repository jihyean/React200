import React, { Component } from 'react';

class R024_ReactState extends Component {
  // 가장 먼저 실행되는 생성자 함수 constructor 안에서 state 변수 초기값 지정
  constructor (props) {
    super(props);
    this.state = {
        StateString: this.props.reactString,  // props를 통해 전달된 reactString 값 저장
        StateNumber: 200,                     // 숫자 200 저장
    }
  }

  render() {
    return (
    <div style={{padding: "0px"}}>
      {/* this.state.변수명 문법으로 state 변수에 접근 및 표시 */}
      {this.state.StateString}{this.state.StateNumber}
    </div>
    )
  }
}

export default R024_ReactState;