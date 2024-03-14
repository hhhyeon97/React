import React, { Component } from 'react';

export default class BoxClass extends Component {
  render() {
    // 클래스 컴포넌트는 무조건 this. 붙여주자
    return <div>Box{this.props.num}</div>;
  }
}
