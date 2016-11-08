import React from 'react';

export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: 'http://placehold.it/60x60'
    }
  }

  render() {
    // console.log("props", this.props);
    // console.log("state", this.state);
    let avatar = this.state.avatar;
    if(this.props.img && this.props.img.url){
        avatar = this.props.img.url();
    }
    return (
        <img className={this.props.klass} src={avatar} alt="Image"/>
      )
  }
}
