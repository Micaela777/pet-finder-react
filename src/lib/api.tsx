const API_BASE_URL = "https://pet-finder-back-production.up.railway.app";

export async function signUpAPI(user) {
   const res = await fetch(API_BASE_URL + "/auth", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });

    console.log("usuario creado")

    return res.json() 
}
