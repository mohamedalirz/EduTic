import React, { Component } from "react";
import boyImage from "../Assets/boy.webp";
import girlImage from "../Assets/girl.webp";
import EduTiclogo from "../Assets/EduTic-logo.jpg";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true, // Simulated user state
      menuOpened: false,
    };
  }

  handleMenuToggle = () => {
    this.setState((prevState) => ({
      menuOpened: !prevState.menuOpened,
    }));
  };

  render() {
    const { user } = this.props; // Get user from props
    const { menuOpened } = this.state;

    return (
      <>
        <header>EduTic</header>
        <nav>
          <div className="edutic-logo">
            <img src={EduTiclogo} alt="EduTic Logo" />
          </div>
          <div className="nav-items">
            <a className="nav-item" href="/">Home</a>
            <a className="nav-item" href="/courses">Courses</a>
            <a className="nav-item" href="/plans">Plans</a>
            <a className="nav-item" href="/">Dashboard</a>
          </div>

          {/* Menu Button */}
          <div className="menu">
            <input
              type="checkbox"
              id="checkbox"
              onChange={this.handleMenuToggle}
              checked={menuOpened}
            />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
            {/* Menu Container */}
            {menuOpened && (
              <section className="menu-container">
                <div className="menu-list" onClick={this.handleMenuToggle}>
                  <a href="/">Home</a>
                </div>
                <div className="menu-list" onClick={this.handleMenuToggle}>
                  <a href="/courses">Courses</a>
                </div>
                <div className="menu-list" onClick={this.handleMenuToggle}>
                  <a href="/plans">Plans</a>
                </div>
                <div className="menu-list" onClick={this.handleMenuToggle}>
                  <a href="/">Dashboard</a>
                </div>
              </section>
            )}
          </div>

          {/* User Profile */}
          {this.state.user ? (
            <div className="profile-side">
              <div className="profile-pic">
                {user.genre === "M" ? (
                  <img src={boyImage} alt="Boy Avatar" />
                ) : (
                  <img src={girlImage} alt="Girl Avatar" />
                )}
              </div>
              <div className="profile-name">
                <span>{user.name}</span>
              </div>
            </div>
          ) : (
            <button className="btn-signup">Sign Up</button>
          )}
        </nav>
      </>
    );
  }
}
