import React from 'react';

export default class Avatar extends React.Component {
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
