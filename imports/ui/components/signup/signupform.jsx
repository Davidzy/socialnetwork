import React from 'react';

export default class SignupForm extends React.Component {
  render() {
    return (
        <div className="row">
            <div className="signup">
                <h1>Sign Up</h1>
                <p className="text-muted">It's free and always will be.</p>
            </div>
            <form>
                <div className="col-sm-9">
                    <div className="row">
                        <div className="col-sm-6 form-group">
                          <input ref="first_name" type="text" placeholder="First name"
                             className="form-control"/>
                        </div>
                        <div className="col-sm-6 form-group">
                          <input ref="last_name" type="text" placeholder="Last name"
                             className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Email or mobile number" ref="email"
                         className="form-control"/>
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="New password" ref="password"
                         className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-md btn-success">Sign Up</button>
                </div>
            </form>
        </div>
    )
  }
}
