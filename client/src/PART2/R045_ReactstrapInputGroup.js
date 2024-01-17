import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

class R045_ReactstrapInputGroup extends Component {
  render() {
    return (
      <>
      <InputGroup>
        <Input placeholder="userid" />
        <div className="input-group-append"> {/* InputGroupAddon */}
          <InputGroupText>@reactmail.com</InputGroupText>
        </div>
      </InputGroup>
      <InputGroup>
        {/* InputGroupAddon */}
        <div className="input-group-prepend"><Button>버튼</Button></div>
        <Input />
      </InputGroup>
      </>
    )}
}

export default R045_ReactstrapInputGroup;