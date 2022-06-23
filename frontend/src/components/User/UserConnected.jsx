/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import MyAccount from "@components/User/MyAccount";
import MyEvents from "@components/User/MyEvents";
import "./user.css";

function UserConnected() {
  const [openMyAccount, setOpenMyAccount] = useState(false);
  const [openMyEvents, setOpenMyEvents] = useState(false);
  const hundleOpenMyAccount = () => {
    setOpenMyAccount(!openMyAccount);
    setOpenMyEvents(false);
  };
  const hundleOpenMyEvents = () => {
    setOpenMyEvents(!openMyEvents);
    setOpenMyAccount(false);
  };

  const handleLogout = () => {
    setOpenMyAccount(true);
  };

  return (
    <div className="loginContainer">
      <div className="buttonContainer">
        <button
          type="button"
          className="buttonStyle buttonStyleLogin"
          onClick={hundleOpenMyAccount}
        >
          Mon compte
        </button>
        <button
          type="button"
          className="buttonStyle buttonStyleLogin"
          onClick={hundleOpenMyEvents}
        >
          Mes événements
        </button>
        <button
          type="button"
          className="buttonStyle buttonStyleLogin"
          onClick={handleLogout}
        >
          Me déconnecter
        </button>
      </div>
      {openMyAccount ? (
        <MyAccount hundleOpenMyAccount={hundleOpenMyAccount} />
      ) : null}
      {openMyEvents ? (
        <MyEvents hundleOpenMyEvents={hundleOpenMyEvents} />
      ) : null}
    </div>
  );
}

export default UserConnected;
