import './App.css';
import { useState, useEffect } from 'react';
//import Box from './component/Box';

// 일반 js랑 다른 점
// 1. 리액트에선 onclick - > onClick 으로 쓴다.
// 2. string 빼고 나머지 값들은 {} 안에 쓴다.
// props - > 내가 보낸 값이 객체 안에 매개변수로써 들어가 있음
// props를 사용하려면 함수에 props를 인자로 전달해야 한다.
// 여기서 App컴포넌트이다.
// 컴포넌트 - >  리액트로 만들어진 앱을 이루는 최소한의 단위
// 컴포넌트는 데이터(props)를 입력받아 View(state) 상태에 따라 DOM Node를 출력하는 함수
// 컴포넌트 이름은 항상 대문자로 시작하도록 한다.
// (리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 취급하기 때문이다.)

// 컴포넌트 안에서 html과 js를 쓸 수 있어서 파일을 분리하지 않아도 되는 장점이 있다.

// 리액트에서 제공해주는 유용한 함수들을 react hook이라 한다.

// useState 함수를 사용해서 state 변화를 주면 ui가 업데이트된다.
// [초기값이 담긴 state, state값을 변경해주는 함수] = useState(초기값)
// state 값을 바꿀 때 변수 바꾸는 것처럼 바꿀 수 없음! -> 함수를 통해서만 바꾸기 가능

// ui에 보여줘야 하는 값은 state로 만들어야 함 !

// state를 바꾸는 함수들을 모아뒀다가 함수가 끝나면 차근차근 실행됨
// 비동기적임 !
// 그래서 콘솔과 ui 결과가 다름
// set함수를 하고 바로 그 state를 이용하면 계속 그전의 값이 나옴

// state는 ui를 다시 랜더링 하기 때문에
// 처음부터 다시 실행이 되면서 0으로 초기화시키기 때문에
// counter가 계속 1로 남게 되는 것
// 반면 state는 그 전의 값을 기억을 해두기 때문에 값이 날라가지 않음!

// 정리
// 변수는 re render 될 때마다 초기화가 된다.
// state 값은 비동기적으로 처리가 된다.

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    setValue(value + 2);
    console.log('counter : ', counter, 'counter2 state : ', counter2);
  };
  // 흐름
  // 1. 유저가 버튼을 클릭한다.
  // 2. counter + 1 해서 1이 됨
  // 3. setState 함수 호출
  // 4. console.log 실행
  //    변수값은 1로 보이고 state 값은 아직 안 변했기 때문에 그 전의 값이 보인다.
  // 함수 끝
  // app 다시 re render
  // let counter = 0을 거치면서 counter 값은 다시 0으로 초기화 된다.
  // 업데이트된 state 값이 보인다.

  useEffect(() => {
    console.log('useEffect!');
  }, []);

  useEffect(() => {
    console.log('useEffect 2!', counter2);
  }, [counter2]);
  // useEffect() 안에 2번째 매개변수인 배열에 아무것도 없으면
  // componentDidMount()처럼 작동
  // 배열 안에 state가 있으면 componentDidMount() + componentDidUpdate()처럼 작용함
  // 배열안에 하나라도 상태가 변하면 1번 호출됨 ! 여러개가 같이 업데이트 되어도 1번만 호출됨!
  useEffect(() => {
    // value가 바뀌면 이 작업을 하겠단 뜻
    console.log('다른 내용 하고싶어요!', value);
  }, [value]);

  return (
    <div>
      {console.log('render!')}
      <div>{counter}</div>
      <div>state : {counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
