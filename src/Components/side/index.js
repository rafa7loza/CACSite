import React, { useContext } from "react";

import { UserContext, AllUsersContext } from "../../Providers/userProvider";

import UserSide from "../user_side";
import TopRatedSide from "../top_rated_side";

import "./style.css";
const Side = ({ className }) => {
  const user = useContext(UserContext);
  const allUsers = useContext(AllUsersContext);

  return (
    <div className={`cac_side ${className || ""}`}>
      <div className="cac_side_sections">
        {!user.isLoading && user.logged ? (
          <div className="cac_side_section">
            <UserSide user={user} />
          </div>
        ) : null}
        {!allUsers.isLoading && (
          <div className="cac_side_section">
            <TopRatedSide allUsers={allUsers} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Side;
