import React, { Component } from 'react';

class R017_Props extends Component {
  render() {
    // 상위 컴포 넌트(App.js)에서 전달받은 props 변수명(props_val)을 붙이면 해당 데이터 사용가능
    let props_value = this.props.props_val;

    // 데이터 가공을 원할시 props 자체 수정이 아닌 컴포넌트 내부 변수(props_val)에 옮겨 가공
    props_value += ' from App.js'
    return (
    <div>{props_value}</div>
    )
  }
}

export default R017_Props;