import React from "react";
import "./Header.css";

import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://i.dlpng.com/static/png/6184865-this-post-is-a-part-of-tinder-logo-transparent-background-hd-tinder-logo-png-840_771_preview.png"
        alt="logo"
      />

      <IconButton>
        <QuestionAnswerIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
