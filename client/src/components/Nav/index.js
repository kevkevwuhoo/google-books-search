import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="/search">
          Search
        </a>
        <a className="nav-item nav-link" href="/saved">
          Saved
        </a>
      </div>
    </nav>
  );
}

export default Nav;
