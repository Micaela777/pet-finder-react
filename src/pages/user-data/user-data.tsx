import React from "react";
import { sendRegisterData } from "hooks/useSignUp"; // Asegurate que el path coincida

function UserData() {
  function handleClick() {
    sendRegisterData();
  }

  return (
    <div>
      <h2 onClick={handleClick} style={{ cursor: "pointer" }}>
        hola prro
      </h2>
    </div>
  );
}

export { UserData };