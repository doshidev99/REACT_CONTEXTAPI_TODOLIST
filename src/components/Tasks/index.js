import React, { useContext } from 'react';
import { Context } from '../../context';

const Tasks = () => {
  const initialState = useContext(Context);
  console.log('initialState >>', initialState);

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
              <tr>
                <td>x</td>
                <td>x</td>
                <td className="text-center">
                  <span>Active</span>
                </td>
                <td className="text-center">
                  <button type="button" className="btn btn-warning">
                    Edit
                  </button>
                  &nbsp;
                  <button type="button" className="btn">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
