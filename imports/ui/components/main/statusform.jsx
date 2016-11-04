import React from 'react';

export default class StatusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        image:'',
        filename:''
      }
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-cotent">
          <div className="panel-heading">
            Update Status
          </div>
          <form className="form center-block">
            <input type="hidden" ref="imageid" value={this.state.image}/>
            <div className="panel-body">
              <div className="form-group">
                <textarea ref="sharing"
                          id="sharing"
                          className="form-control input-lg"
                          placeholder="What do you want to share?">
                </textarea>
                <h3>{this.state.filename || ''}</h3>
              </div>
              <div className="panel-footer">
                <div>
                  <ul className="pull-left list-inline">
                    <li><input ref="file" className='filepicker' id="file" type="file"/></li>
                  </ul>
                  <button className="btn btn-primary btn-sm postbutton">Post</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
