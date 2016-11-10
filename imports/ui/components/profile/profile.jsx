import React from 'react';
import { Meteor } from 'meteor/meteor';
import AvatarContainer from '../avatar/avatar-container';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      klass:'img-circle img-responsive custom-input-file',
      editmode:false,
      email:this.props && this.props.currentUser && this.props.currentUser.emails ? this.props.currentUser.emails[0].address:'you@yourdomain.com'
    };
    this.uploadFile = this.uploadFile.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  toggleEdit() {
    this.setState({editmode: !this.state.editmode, email:this.props.currentUser ? Meteor.user().emails[0].address:''});
  }
  changeEmail(e) {
    e.preventDefault();
    Meteor.call('changeEmail', e.target.value);
    this.toggleEdit();
    this.setState({email: e.target.value});
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
    let editmode = <input onBlur={this.changeEmail}
                      type="text"
                      ref="email"
                      defaultValue={this.state.email}
                    />;
    let emaillink = this.props.currentUser && this.props.currentUser.emails ? 'mailto:' + this.props.currentUser.emails[0].address:'';
    let mailblock = !this.state.editmode ? <a href={emaillink}>{this.state.email}</a>:editmode;
    let fullname = 'Bill Gates (default username)';
    if (this.props.currentUser && this.props.currentUser.profile) {
      fullname = this.props.currentUser.profile.firstname + ' ' + this.props.currentUser.profile.lastname;
    }
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
          <h2>{fullname}</h2>
          <table className="table table-user-information">
            <tbody>
              <tr>
                <td onClick={this.toggleEdit}>Email</td>
                <td>{mailblock}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
