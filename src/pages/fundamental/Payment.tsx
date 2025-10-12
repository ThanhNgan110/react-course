import React from 'react';
import { useDispatch } from 'react-redux';
import { showLoading } from '../../redux/app.actions';

function Payment() {
  const dispatch = useDispatch();

  return (
    <div>
      Payment
      <button onClick={() => dispatch(showLoading())}>toggl loading</button>
    </div>
  )
}

export default Payment