import React, { Component } from 'react';

class R064_Promise extends Component {
  componentDidMount(){
    // Promise 객체 생성
    new Promise(resolve => {
      // 1.5초후 resolve 함수 호출
      setTimeout(function() {
        resolve('react'); // Promise는 이행상태
      }, 1500);
    })
    // then 함수 실행 -> 결과값(react)를 result로 받아 200을 붙여 반환
    .then(function(result) {
      console.log(result);
      return result + 200;
    })
    // 위의 then 함수의 결과값을 파라미터값으로 받아 사용
    .then(result => {
      console.log(result);
    })
  }

  render() {
    return (
        <h1>Promise</h1>
    )
  }
}

export default R064_Promise;