import React, { PureComponent } from 'react';

// PureComponent 클래스를 import 후 상속받아 사용
class R028_PureComponentClass extends PureComponent {
   // 배열 변수 선언 및 초기값 설정
  constructor (props) {
    super(props);
    this.state = {
      StateString: 'react',
      StateArrayObj: ['react', { react: '200' }]
    }
  }

  // 버튼 클릭시 setState() 함수로 동일한 state 값 선언 및 초기화
  buttonClick = (type) => {
    // 값 변경으로 간주X -> render() 함수 미호출
    if(type === 'String'){
      this.setState({ StateString: 'react' });
    }
    // 변수는 값만 비교 / 객체는 참조값까지 비교
    // 값 변경으로 간주 -> render() 함수 호출
    else{
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

export default R028_PureComponentClass;
