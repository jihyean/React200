import React, { Component } from 'react';

class R013_ArrowFunction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrowFuc: 'React200',
      num: 3
    };
  }

  componentDidMount() {
    Function1(1);
    this.Function2(1,1);
    this.Function3();
    this.Function4();
    this.Function5(0,2,3);

    // 전달받은 num1 변수 함수 내부에서 사용
    function Function1(num1) {
      return console.log(num1+'. Es5 Function'); //* 1. Es5 Function
    }
  }
  
  // 화살표 함수로 선언
  // 함수내에서 사용하는 this는 R013_ArrowFunction 컴포넌트, this로 컴포넌트의 state에 접근하여 사용
  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3+'. Arrow Function : '+this.state.arrowFuc); //* 2. Arrow Function : React200
  }
  
  Function3() {
    var this_bind = this;
    setTimeout(function() {
      // 콜백함수내에서는 컴포넌트에 this로 접근 불가, 접근할 수 있는 변수에 this를 백업
      // 백업된 변수인 this_bind를 이용해 컴포넌트의 state 변수에 접근
      console.log(this_bind.state.num+'. Es5 Callback Function noBind : '); //* 3. Es5 Callback Function noBind : 

      // this는 window객체이기 때문에 this로 state 변수에 접근 불가 
      console.log(this.state.arrowFuc); //! Uncaught TypeError: Cannot read properties of undefined (reading 'arrowFuc')
    },100);
  }
  
  Function4() {
    setTimeout(function() {
      // 콜백함수에 함수밖에 있는 this를 bind할시 this를 컴포넌트로 사용 가능
      console.log('4. Es5 Callback Function Bind : '+this.state.arrowFuc); //* 4. Es5 Callback Function Bind : React200
    }.bind(this),100);
  }
  
  Function5 = (num1, num2, num3) => {
    const num4 =  num1 + num2 + num3;
    setTimeout(() => {
      // 화살표 함수에서는 this를 bind 해주지 않아도 this를 컴포넌트로 사용해 state 변수에 접근 가능
      console.log(num4+'. Arrow Callback Function : '+this.state.arrowFuc); //* 5. Arrow Callback Function : React200
    }, 100);
  }

  render() {
    return (
      <h2>[ THIS IS ArrowFunction ]</h2>
    )
  }
}

export default R013_ArrowFunction;