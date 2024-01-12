import React, { Component } from 'react';

class R023_PropsNode extends Component {
  render() {
    return (
    <div style={{padding: "0px"}}>
      {/* 상위 컴포넌트에서 전달한 노드는 this.props.children이라는 문법으로 접근하여 사용가능 */}
      {this.props.children}
    </div>
    )
  }
}

export default R023_PropsNode;
