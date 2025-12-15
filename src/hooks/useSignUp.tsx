import { useAtom } from "jotai";
import { userDataAtom } from "atoms/sign-up-atom";
import { userDataUpperAtom } from "atoms/sign-up-atom";

export function useSignUp(){

    const [user, setUser] = useAtom(userDataAtom)
    console.log(user)
    console.log("soy el console del hook")

    async function sendRegisterData() {

        try {
          const res = await fetch("https://pet-finder-back-production.up.railway.app/test", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
      
          const data = await res.json();
          console.log("Respuesta del backend:", data);
        } catch (error) {
          console.error("Error en la llamada al backend:", error);
        }
    }

    return { sendRegisterData }
}

    