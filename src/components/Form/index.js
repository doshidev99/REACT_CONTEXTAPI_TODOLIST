import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context';

const Form = () => {
  const { dispatch } = useContext(Context);
  const onChangeInput = e => {
    const value = e.target.value;
    dispatch({ type: 'ON_CHANGE_INPUT', payload: value });
  };

  const onChangeSelect = e => {
    const value = e.target.value === 'false' ? false : true;
    dispatch({ type: 'ON_CHANGE_SELECT', payload: value });
  };

  const onAddSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ON_ADD_SUBMIT' });
  };

 
  return (
    <div className="col-8">
      <div className="panel panel-warning">
        <div className="panel-body">
          <form onSubmit={onAddSubmit}>
            <div className="form-group">
              <label>Name :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={onChangeInput}
              />
            </div>
            <label>Status :</label>
            <select
              className="form-control"
              name="status"
              onChange={onChangeSelect}
            >
              <option value={true}>Active</option>
              <option value={false}> Hidden </option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Add
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                Destroy
              </button>
            </div>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};
Form.prototype = {
  name: PropTypes.string,
  status: PropTypes.bool,
};
export default Form;
