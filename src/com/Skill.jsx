import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Skill(props) {
  const dispatch = useDispatch();

  const Add = (e) => {
    dispatch(props.add());
  };
  const Dec = (e) => {
    dispatch(props.dec());
  };
  return (
    <div className="flex">
      <p>
        {props.text} {props.value}
      </p>
      <div className="flex">
        <button onClick={Add}></button>
        <button onClick={Dec}></button>
      </div>
    </div>
  );
}

export default Skill;
