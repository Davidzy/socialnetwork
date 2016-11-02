import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <span className="navbar-react">
          <i className="fa fa-facebook"></i>akebook
        </span>
        <div className="collapse navbar-collapse" id="navbar">
          <form role="form" id="signin" className="navbar-form navbar-right">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user"></i>
              </span>
              <input type="text" ref="email" id="email" className="form-control" placeholder="Email Address"></input>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
              </span>
              <input type="password" ref="password" className="form-control" placeholder="Password"></input>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
