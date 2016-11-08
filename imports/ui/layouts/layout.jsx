import React from 'react';
import NavbarContainer from '../components/navbar/navbar-container';
// import Navbar from '../components/navbar/navbar';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="wrapper">
          <div className="box">
              <div className="srow row-offcanvas row-offcanvas-left push-down-50">
                  <NavbarContainer />
                  {this.props.sidebar}
                  {this.props.content}
              </div>
          </div>
      </div>
    )
  }
}
