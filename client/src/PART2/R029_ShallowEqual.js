import React, { Component  } from 'react';
import { shallowEqualArrays} from "shallow-equal";

// shallow-equal import 후 사용
class R029_ShallowEqual extends Component  {
  constructor (props) {
    super(props);
    this.state = { StateString: 'react' }
  }

  // 변경된 props와 state 값을 파라미터로 받을 수 있음(반환값이 true일때 render() 함수 실행)
  // 문자열 state 값 변경 감지 후 render() 함수 실행 의도
  shouldComponentUpdate(nextProps, nextState){
    return !shallowEqualArrays(this.state, nextState) // shallowEqualArrays() 함수는 값만 비교 -> false -> 실행하지 않음
  }

  componentDidMount(){
    const object = { react : '200'};
    const Array1 = ['리액트', object];
    const Array2 = ['리액트', object];
    const Array3 = ['리액트', { react : '200'}];
    
    // 선언한 배열의 값을 비교
    // object 변수는 동일한 객체를 참조
    console.log('shallowEqualArrays(Array1, Array2) : ' + shallowEqualArrays(Array1, Array2)); //* true
    console.log('shallowEqualArrays(Array2, Array3) : ' + shallowEqualArrays(Array2, Array3)); //* false 값은 같지만 다른 참조값을 갖는 객체
    this.setState({StateString : 'react'})
  }

  render() {
    console.log('render() 실행')
    return (<div></div>)
  }
}

export default R029_ShallowEqual;