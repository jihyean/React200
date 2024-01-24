import React, { Component } from 'react';

class R073_ReactRef extends Component {
  constructor(props) {
    super(props);
    this.InputRef = React.createRef(); // createRef() 메소드를 사용하여 Ref를 생성한다.
  }

  RefFocus = (e) => {
    this.InputRef.current.focus();
  }

  JavascriptFocus() {
    document.getElementById('id').focus();
  }

  render() {
    return (
      <>
        {/* element에 ref 속성을 추가하고 Ref 변수에 inputRef를 할당해 참조(ref의 current라는 속성에 할당) */}
        <input id="id" type="text" ref={this.InputRef} />
        <input type="button" value="Ref Focus" onClick={this.RefFocus}/> {/* 클릭시 RefFocus() 메소드 실행 */}
        <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus}/> {/* 클릭시 JavascriptFocus() 메소드 실행 */}
      </>  
    )
  }
}

export default R073_ReactRef;