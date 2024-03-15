// 클래스 컴포넌트 기본 폼 불러오기 rcc

import React, { Component } from 'react';
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {
  // 클래스 컴포넌트에서 state를 만드는 방식
  // constructor : 생성자 / 컴포넌트가 실행될 때 호출이 되는 함수
  // lifecycle 함수중 하나임 !
  constructor(props) {
    super(props);
    // 클래스 컴포넌트에서는
    // state라는 객체를 만들어 그 안에 원하는 state를 넣는 구조 !
    this.state = {
      counter2: 0,
      num: 1,
      value: 0,
    };
    console.log('constructor');
  }
  // 클래스 컴포넌트에서는 한 번에 만들고 한 번에 업데이트 함
  // 클래스 컴포넌트에서는 함수 만들 때 const 안 씀 !
  increase = () => {
    // this.setState : 클래스 컴포넌트에서 자동으로 제공하는 함수
    // setState함수를 통해 값 변경
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
    console.log('increase function', this.state);
  };

  componentDidMount() {
    // api 콜
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.state);
  }
  render() {
    console.log('render');
    // 클래스 컴포넌트를 사용할 땐 this.state를 매번 사용해주어야 한다!
    // 함수를 부르거나 state를 부를 땐 항상 this.을 붙이자!
    return (
      <div>
        <div>state : {this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        {/* <BoxClass num={this.state.value} /> */}
        {/* 아래 예시 ) state가 3보다 작을 때만 BoxClass 부분 보이게 !*/
        /*&& 연산자로 조건부 렌더링 가능 / js랑 html을 섞어서 작업해주고 싶을 때{}괄호 써서 안에 작업! */}
        {this.state.counter2 < 3 && <BoxClass num={this.state.value} />}
      </div>
    );
  }
}
