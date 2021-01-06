import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Home</a>
              <ul className="nav navbar-nav">
                <li>
                  <a>Function</a>
                </li>
                <li className="active">
                  <a>State</a>
                </li>
              </ul>
            </div>
          </nav>);

    }
}

export default Header;