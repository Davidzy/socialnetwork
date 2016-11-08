import React from 'react';
import { Meteor } from 'meteor/meteor';
import AvatarContainer from '../avatar/avatar-container';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      klass:'img-circle img-responsive custom-input-file',
    };
    this.uploadFile = this.uploadFile.bind(this);
  }
  componentDidMount() {
    this.setState({email:this.props.currentUser ? Meteor.user().emails[0].address:''});
  }
  uploadFile(e) {
    e.preventDefault();
    let self = this;
    let uploadedId = null;
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      var file = e.currentTarget.files[0];
      if (file) {
        var uploadInstance = Images.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);
        uploadInstance.on('end', function (error, fileObj) {
          uploadedId = fileObj._id;
          console.log(1, uploadedId);
          Meteor.call('changeAvatar', Meteor.user(), uploadedId);
          setTimeout(function() {
              self.setState({klass:'img-circle img-responsive custom-input-file updated'});
              console.log(4, self.state);
          }, 100)
        });
        uploadInstance.start();
      }
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-2 hidden-xs">
          <AvatarContainer user={this.props.currentUser ? this.props.currentUser._id: ''} klass={this.state.klass} />
            <div>
              <label>
                <div className="inputWrapper">
                  <input id="avatar" name="avatar" onChange={this.uploadFile}
                         type="file" className="fileInput change-avatar"/>
                </div>
              </label>
            </div>
        </div>
        <div className="col-md-9 col-xs-9">
          <h2>Bill Gates</h2>
          <table className="table table-user-information">
            <tbody>
              <tr>
                <td>Email</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
