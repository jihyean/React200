import React, { Component } from 'react';
import $ from 'jquery'; // jquery 임포트하여 $ 기호를 선언

class R016_Jquery extends Component {

  input_alert = (e) => {
    // id inputname인 요소의 값을 가져와 alert()으로 표시
    var input_val = $('#inputId').val();
    alert(input_val);
  }

  render() {
    return (
      <div>
        <h2>[ THIS IS Jquery ]</h2>
        <input id="inputId" name="inputName"/>
        <button id="buttonId" onClick={e => this.input_alert(e)}>Jquery Button</button>
      </div>
    )
  }
}

export default R016_Jquery;