export async function sendRegisterData() {
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