import React, { Component } from 'react';

class R015_Map extends Component {

  componentDidMount() {
    var Map_Arr = [ 3, 2, 8, 8 ]

    // 기존 배열의 요소를 map()함수를 통해서 가져옴
    let Map_newArr = Map_Arr.map(x => x)
    console.log("1. Map_newArr : ["+Map_newArr+"]") //* 1. Map_newArr : [3,2,8,8]

    // 기존 배열의 요소에 순서대로 접근해 2씩 곱하여 새로운 배열에 저장
    let Map_mulitiArr = Map_Arr.map(x => x * 2)
    console.log("2. Map_mulitiArr : ["+Map_mulitiArr+"]") //* 2. Map_mulitiArr : [6,4,16,16]

    var ObjArray = [{key:'react', value:'200'},
                    {key:'리액트', value:'TwoHundred'}];

    // 배열 안의 객체를 순서대로 가져와 콜백함수 실행
    // 가져온 값을 obj 변수에 저장, 기존 배열의 인덱스와 index 값 동일
    let Map_objArr = ObjArray.map((obj, index) => {
      //* 3. obj : {"key":"react","value":"200"} 
      //* 4. obj : {"key":"리액트","value":"TwoHundred"}
      console.log((index+3)+". obj : "+JSON.stringify(obj))
      
      // 새로운 객체 생성
      // 기존 객체의 key, value 값을 새로운 객체의 key, value 값으로 저장
      // 모든 반복 종료시 Map_objArr변수에 반환값 저장
      var Obj = {};
      Obj[obj.key] = obj.value;
      return Obj;
    });
    console.log("5. Map_objArr : "+JSON.stringify(Map_objArr)) //* 5. Map_objArr : [{"react":"200"},{"리액트":"TwoHundred"}]
  }

  render() {
    return (
      <h2>[ THIS IS Map ]</h2>
    )
  }
}

export default R015_Map;