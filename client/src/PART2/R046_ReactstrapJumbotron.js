import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class R046_ReactstrapJumbotron extends Component {
  render() {
    return (
      <>
        {/* Jumbotron */}
        <div className="jumbotron" style={{backgroundColor: "#D38C7C"}}>
          <h1 className="display-4">REACT 200</h1>
          <p className="h4">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          <hr className="my-2" />
          <p>There are many variations of passages of Lorem Ipsum available.</p>
          <p className="lead">
            <Button color="danger">Go Detail</Button>
          </p>
        </div>
      </>
    )}
}

export default R046_ReactstrapJumbotron;