import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
// import { Images } from '../../../api/images';

export default class StatusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        imageId:'',
        filename:''
      };
    this.uploadFile = this.uploadFile.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(e) {
    e.preventDefault();
    var that = this;
    let message = this.sharing.value;
    let imageid =  this.imagepath.value;
    var imageurl = '';
    if (imageid !== '') {
      imageurl = Images.findOne({_id: imageid}).link();
    }
    Meteor.call('Posts.insert',message,imageid, imageurl,function(err){
        if(err){
            console.log(err);
        }
    });
      // console.log(message);
      // console.log(imageurl);
    that.setState({
      filename:'',
      imageId: ''
    });
    this.sharing.value = "";
    this.imagepath.value = "";
  }
  uploadFile(e) {
    e.preventDefault();
    let self = this;
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      var file = e.currentTarget.files[0];
      if (file) {
        var uploadInstance = Images.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);
      // self.setState({
      //   filename: file.name
      // });
      uploadInstance.on('start', function () {
        // console.log('Starting');
      });
      uploadInstance.on('uploaded', function (error, fileObj) {
        self.setState({
          imageId: fileObj._id,
          filename: fileObj.name
        });
      });
      uploadInstance.start();
      }
    }
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-cotent">
          <div className="panel-heading">
            Update Status
          </div>
          <form onSubmit={this.submitForm} className="form center-block">
            <input type="hidden" ref={(input) => this.imagepath = input} value={this.state.imageId}/>
            <div className="panel-body">
              <div className="form-group">
                <textarea ref={(input) => this.sharing = input}
                          id="sharing"
                          className="form-control input-lg"
                          placeholder="What do you want to share?">
                </textarea>
              </div>
              <h3>{this.state.filename || ''}</h3>
            </div>
              <div className="panel-footer">
                <div>
                  <ul className="pull-left list-inline">
                    <li><input className='filepicker' onChange={this.uploadFile} type="file"/></li>
                  </ul>
                  <button type="submit" className="btn btn-primary btn-sm postbutton">Post</button>
                </div>
              </div>
          </form>
        </div>
      </div>
    )
  }
}
