import React, { Component } from 'react';

class R022_PropsDefault extends Component {
  render() {

    // render() 함수 내에서 지역변수를 선언해 props로 전달된 값들을 할당
    let {
      ReactString,
      ReactNumber
    } = this.props

    return (
    <div style={{padding: "0px"}}>
      {/*  ReactNumber값은 부모 컴포넌트에서 값이 전달되어 해당 값으로 표시되고 ReactString 값은 전달되지 않아 기본값으로 설정 */}
      {ReactString}{ReactNumber}
    </div>
    )
  }
}

// 상위 컴포넌트에서 값이 전달될 것이라 기대되는 ReactString, ReactNumber 변수에 기본값을 할당하였다
R022_PropsDefault.defaultProps = {
  ReactString: "리액트",
  ReactNumber: 400
}

export default R022_PropsDefault;