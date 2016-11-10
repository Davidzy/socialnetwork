import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: 'http://placehold.it/60x60'
    }
  }

  render() {
    let avatar = this.state.avatar;
    if(this.props.img && this.props.img.link()){
        avatar = this.props.img.link();
    }
    return (
        <img className={this.props.klass} src={avatar} alt="Image"/>
      )
  }
}

export default createContainer(({user}) => {
  let data = {};
  // let userhandle = Meteor.subscribe('userlist', this.props.user);
  // let imagehandle = Meteor.subscribe('imagelist',this.props.user);
  data.usr = Meteor.users.findOne({_id: user});
  if (data.usr) {
    data.img = Images.findOne({_id: data.usr.profile.avatar});
  }
  return data;
}, Avatar);
