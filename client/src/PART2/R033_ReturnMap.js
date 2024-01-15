import React, { Component } from 'react';

class R033_ReturnMap extends Component {
  render() {
    // 태그 리스트를 element_Array 배열에 순서대로 저장
    const element_Array = [
      <li>react</li>
      , <li>200</li>
      , <li>Array map</li>
    ]

    // element_Array 배열에 있는 element들을 map() 함수로 꺼내 <ul> 태그 안쪽에 출력
    return (
      <ul>
        {element_Array.map((array_val) => array_val)}
      </ul>
    )
  }
}

export default R033_ReturnMap;