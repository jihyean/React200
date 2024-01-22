import React, { Component } from 'react';

class R065_Promise extends Component {
  componentDidMount(){
    // Promise 객체 생성
    // resolve는 이행함수, reject는 거부함수
    new Promise((resolve, reject) => {
      reject(Error("ERROR Info")); // Errors를 활용한 거부상태
    })
    .then(result => console.log("then "+result)) // 이행상태시 실행
    .catch(result => console.log("catch : "+result)); // 거부상태시 실행
  }

  render() {
    return (
        <h1>Promise</h1>
    )
  }
}

export default R065_Promise;