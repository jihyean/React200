import React, { Component } from 'react';

class R067_onChange extends Component {
  change = (e) => {
    // 이벤트 변수에 target 속성을 붙여 value 값을 가져와 val 변수에 할당한다.
    var val = e.target.value;
    console.log('param : '+ val);
  }

  render() {
    return (
      <>
        <input type="text" onChange={this.change}/>
        <select onChange={this.change}>
            <option value="react">react</option>
            <option value="200">200</option>
        </select>
      </>
    )
  }
}

export default R067_onChange;