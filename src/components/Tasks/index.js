import React, { useContext } from 'react';
import { Context } from '../../context';
// import { reducer } from '../../reducers';

const Tasks = () => {
  const { state, dispatch } = useContext(Context);
  const { tasks } = state;

  const onDelete = id => {
    dispatch({ type: 'ON_DELETE', payload: id });
  };

  const onUpdateStatus = (id) => {
    dispatch({ type: 'ON_UPDATE_STATUS', payload: id });
    console.log(tasks);
    
  };

  const elmTasks = tasks.map((task, index) => (
    <tr key={Date.now() + Math.random()}>
      <td>{index + 1}</td>
      <td>{task.name} </td>
      <td className="text-center">
        <span
          onClick={() => onUpdateStatus(task.id)}
          className={
            task.status
              ? 'badge badge-pill  badge-success'
              : 'badge badge-pill  badge-danger'
          }
        >
          {task.status ? 'Active' : 'Hidden'}
        </span>
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-warning">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="col-12 mt-2">
      <div className="row mt-15">
        <div className="col-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search...."
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </span>
          </div>
        </div>
      </div>
      <br />
      <div className="row mt-15">
        <div className="col-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Name</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <select className="form-control">
                    <option value="-1">All</option>
                    <option value="0">Hidden</option>
                    <option value="1">Active</option>
                  </select>
                </td>
                <td />
              </tr>
              {elmTasks}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
