import React, { Component } from 'react';

class R025_SetState extends Component {
  constructor (props) {
    super(props);
    this.state = {
        StateString: 'react', // 초기값으로 'react' 문자열 저장
    }
  }

  StateChange = (flag) => {
    if(flag == 'direct') this.state.StateString = '리액트';
    if(flag == 'setstate') this.setState({StateString : '리액트'}); // setState()함수를 활용하여 값 변경 후 render() 함수 호출
  }

  // constructor 함수 실행 후 render() 함수 실행 -> state 값 초기값 지정
  render() {
    return (
    <div style={{padding: "0px"}}>
      <button onClick={(e) => this.StateChange('direct', e)}>state 직접 변경</button>
      <button onClick={(e) => this.StateChange('setstate', e)}>setState로 변경</button><br/>
      [state 변경하기] StateString : {this.state.StateString}
    </div>
    )
  }
}

export default R025_SetState;
