import React from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from './redux/actions';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import "./App.css"
const ComponentA = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setValue(value));
  };

  return (
    <div>
      <div className="container"> 
      <h2>Component A</h2>
      <ComponentB onChange={handleChange} />
      <ComponentC />
    </div>
    </div>
  );
};

export default ComponentA;
