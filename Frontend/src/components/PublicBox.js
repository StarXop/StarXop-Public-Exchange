import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Feature/Userslice";
import "./css/PublicBox.css";

function PublicBox() {
  const user = useSelector(selectUser);
  return (
    <div className="publicBox">
      <div className="publicBox__info">
        <Avatar src={user?.photo} />
      </div>
      <div className="publicBox__publiv">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  );
}

export default PublicBox;