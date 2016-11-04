import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-blue navbar-fixed-top">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="navbar">
            <span className="sr-only"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="/dashboard" className="navbar-brand logo">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <nav className="collapse navbar-collapse">
          <form role="form" className="navbar-form navbar-left">
            <div className="input-group input-group-sm bs-example">
              <input ref="searchText" id="typeahead" type="text" className="from-control tt-query" />
              <div className="input-group-btn searchBtn">
                <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </form>
          <ul className="nav navbar-nav">
            <li>
              <a href="/dashboard"><i className="fa fa-home"></i>News Feed</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a data-toggle="dropdown" href="#" className="dropdown-toggle">
                <i className="fa fa-user"></i>Bill Gates
              </a>
              <ul className="dropdown-menu">
                <li><a href="/profile">Edit Profile</a></li>
                <li><a href="/signout">Logout</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
