import React from "react";
import { useSignUp } from "hooks/useSignUp"; // Asegurate que el path coincida

function UserData() {

    const { sendRegisterData } = useSignUp()

    console.log("soy el console de la pagina")

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