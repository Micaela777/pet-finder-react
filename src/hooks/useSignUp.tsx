import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { newUser } from "atoms/sign-up-atom";
import { signUpAPI } from "lib/api";

export function useSignUp(){

  const navigate = useNavigate()

  const [userData, setUserData] = useAtom(newUser);
  const [passwordError, setPasswordError] = useState("");

  async function getUserData(data){
    if( data.newUserPassword !== data.confirmPassword){
        setPasswordError("ⓘ Las contraseñas no coinciden");
    } else {
        setPasswordError("");
        const user = {
          fullname: data.newUserName,
          email: data.newUserEmail,
          location: data.newUserLocation,
          password: data.newUserPassword
        }
        setUserData(user)

        const res = await signUpAPI(user)
        console.log("usuario creado", res)
        navigate("/user-location")
    };
  };

    return {getUserData, passwordError };
};

    