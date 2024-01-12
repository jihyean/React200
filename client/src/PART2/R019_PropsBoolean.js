import React, { Component } from 'react';

class R019_PropsDatatype extends Component {
  render() {
    let {
      BooleanTrueFalse
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      {BooleanTrueFalse ? '2. ' : '1. '}
      {BooleanTrueFalse.toString()} {/* 불린 변수는 직접 화면에 출력 불가 -> toString 사용 문자열로 출력 */}
    </div>
    )
  }
}

export default R019_PropsDatatype;