import React, { Component } from 'react';

// Component 클래스 import 후 상속받아 사용
class R027_ComponentClass extends Component {

  // 배열 변수 선언 및 초기값 설정
  constructor (props) {
    super(props);
    this.state = {
      StateString: 'react',
      StateArrayObj: ['react', { react: '200' }]
    }
  }

  // 버튼 클릭시 setState() 함수로 state 값 선언 및 초기화 -> state 값 변경 -> render() 함수 호출
  buttonClick = (type) => {
    if(type === 'String'){
      this.setState({ StateString: 'react' });
    }else{
      this.setState({ StateArrayObj: ['react', { react: '200' }] });
    }
  }

  render() {
    console.log('render() 실행')
    return (
      <div>
        <button onClick={e => this.buttonClick('String')}>문자열 변경</button>
        <button onClick={e => this.buttonClick('ArrayObject')}>객체 배열 변경</button>
      </div>
    )
  }
}

export default R027_ComponentClass;
