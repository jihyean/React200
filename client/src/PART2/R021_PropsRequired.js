import React, { Component } from 'react';
import datatype from 'prop-types';

class R021_PropsRequired extends Component {
  render() {

    // render() 함수 내에서 지역변수를 선언해 props로 전달된 값들을 할당
    let {
      ReactString,
      ReactNumber
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      {ReactString}{ReactNumber}  {/* ReactString 변수값이 비어있기 때문에 상위 컴포넌트에서 전달받은 ReactNumber(200)만 출력 */}
    </div>
    )
  }
}

R021_PropsRequired.propTypes = {
  ReactString: datatype.isRequired, // ReactString 이라는 props값을 필수로 지정(미지정시 개발자 도구에서 경고)
}

export default R021_PropsRequired;