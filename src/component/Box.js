import React from 'react';

const Box = (props) => {
  console.log('props: ', props);
  // 내가 보낸 값이 객체 안에 매개변수로써 들어가 있음
  return (
    <div className="box">
      Box{props.num}
      <p>{props.name}</p>
    </div>
  );
};

export default Box;
