import React, { Component } from 'react';
import datatype from 'prop-types';

class R020_PropsObjVal extends Component {
  render() {

    // render() 함수 내에서 지역변수를 선언해 props로 전달된 값들을 할당
    let {
      ObjectJson
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      {JSON.stringify(ObjectJson)}
    </div>
    )
  }
}

// shape 유형을 사용해 객체 ObjectJson의 내부 key 값에 대해 자료형 선언
R020_PropsObjVal.propTypes = {
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number
  })
}

export default R020_PropsObjVal;