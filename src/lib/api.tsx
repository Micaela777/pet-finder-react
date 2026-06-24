const API_BASE_URL = "https://pet-finder-back-production.up.railway.app";

///
export async function signUpAPI(user) {
   const res = await fetch(API_BASE_URL + "/auth", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
    return res.json(); 
};

///
export async function signInAPI(email, password) {
    const res = await fetch(API_BASE_URL + "/auth/token", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email, password})
    });
    const data = await res.json();
    return data;
};

///
export async function getMeAPI(token) {

    const res = await fetch(API_BASE_URL + "/me", {
        method: "get",
        headers: { "Authorization": `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
};

///
export async function updateUserAPI(userId, fullname, location, token) {
   const res = await fetch(API_BASE_URL + "/update-user", {
        method: "post",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({userId, fullname, location})
    });
    const data = await res.json();
    return data; 
};

///
export async function updatePasswordAPI(userId, password, token) {
    const res = await fetch(API_BASE_URL + "/update-password", {
        method: "post",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({userId, password})
    });
    const data = await res.json();
    return data;
};

///
export async function createPetAPI(name, pictureURL, location, lat, lng, token) {
    const res = await fetch(API_BASE_URL + "/pets", {
        method: "post",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({name, pictureURL, location, lat, lng})
    });
    const data = await res.json();
    return data;
};

///
export async function getMyPetsAPI(token) {
    const res = await fetch(API_BASE_URL + "/me/pets", {
        method: "get",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const data = await res.json();
    return data;
};

///
export async function getPetByIdAPI(id) {
    const res = await fetch(API_BASE_URL + `/pets/${id}`, {
        method: "get",
        headers: { 
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
};

///
export async function updatePetAPI(name, pictureDataURL, location, lng, lat, id) {
    const res = await fetch(API_BASE_URL + `/pets/${id}`, {
        method: "put",
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, pictureDataURL, location, lng, lat})
    });
    const data = await res.json();
    return data;
};

///
export async function deletePetReportAPI(id, token) {
    const res = await fetch(API_BASE_URL + `/pets/${id}`, {
        method: "delete",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const data = await res.json();
    return data;
};

///
export async function getLostPetsNearbyAPI(lat, lng) {
    const res = await fetch(API_BASE_URL + `/mascotas-cerca-de?lat=${lat}&lng=${lng}`);
    
    const data = await res.json();
    return data;
};

///
export async function createReportAPI(name, phone, description, pet_id) {
    const res = await fetch(API_BASE_URL + "/reports", {
        method: "post",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ name, phone, description, pet_id })
    });
    const data = await res.json();
    return data;
};

///
export async function markPetAsFoundAPI(id, token) {
    const res = await fetch(API_BASE_URL + `/pets/${id}/found`, {
        method: "put",
        headers: {
            "Content-Type": "application/json" ,
            "Authorization": `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
};