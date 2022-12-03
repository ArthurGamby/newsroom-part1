import React from "react";
import { StyledContainer } from "./navbar.styles";

function Navbar(props) {
  return (
    <StyledContainer>
      <div className="nav-items">
        <span>
          <a href="/">Home</a>
        </span>
        <span>
          <a href="/">Tesla</a>
        </span>
        <span>
          <a href="/">Apple</a>
        </span>
        <span>
          <a href="/">Tech</a>
        </span>
        <span>
          <a href="/">Markets</a>
        </span>
        <span>
          <a href="/">Sports</a>
        </span>
        <span>
          <a href="/">Politics</a>
        </span>
      </div>
    </StyledContainer>
  );
}

export default Navbar;
