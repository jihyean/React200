import React, { Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';

// 기본 알림 alert, 삭제 가능 알림
class R034_ReactstrapAlerts extends Component {
  render() {
    return (
      <div>
      <Alert color="light">
        Simple Alert [color : light]
      </Alert>
      <UncontrolledAlert color="warning">
        Uncontrolled Alert [color : warning]
      </UncontrolledAlert>
      </div>
    )
  }
}

export default R034_ReactstrapAlerts;