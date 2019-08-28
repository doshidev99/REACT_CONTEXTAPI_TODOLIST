import React from 'react';

const Form = () => (
  <div className="col-8">
    <div className="panel panel-warning">
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label>Name :</label>
            <input type="text" className="form-control" name="name" />
          </div>
          <label>Status :</label>
          <select className="form-control" required="required" name="status">
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

export default Form;
