import React, { useState, useEffect, Component } from 'react';

function R031_ReactHook(props){
  // useState()로 변수 선언 및 할당
  // 이때 두가지 인자를 가진 배열(변수명, 변수값 변경해주는 함수) 반환
  const [contents, setContents] = useState('[ THIS IS REACT ]');

  // componrntDidMount()와 같이 return되는 html 코드들이 화면에 그려진후 실행
  // 최초 페이지 로딩될 때 실행, setContents() 함수로 값 변경시 한번 더 실행
  useEffect(() => {
    console.log('useEffect');
  });

  return (
    <div style={{padding: "0px"}}>
      <h2>{contents}</h2>
      <button onClick={() =>setContents('[ THIS IS HOOK ]')}>버튼</button>
    </div>
  )
}

export default R031_ReactHook;