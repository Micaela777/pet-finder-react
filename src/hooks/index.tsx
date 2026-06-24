import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { userDataAtom } from "atoms/user-data-atom";
import { userCoordinates } from "atoms/user-coordinates";
import { isLoggedInAtom } from "atoms/auth-atom";
import { userIdAtom } from "atoms/user-id-atom";
import { tokenAtom } from "atoms/token-atom";
import { petAtom } from "atoms/pet-atom";
import { petReportErrorsAtom } from "atoms/pet-report-errors-atom";
import { selectedPetAtom } from "atoms/selected-pet-atom";
import { selectedPetIdAtom } from "atoms/selected-pet-id-atom";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import { 
  signUpAPI, 
  signInAPI, 
  getMeAPI, 
  updateUserAPI, 
  updatePasswordAPI,
  createPetAPI,
  getMyPetsAPI,
  getPetByIdAPI,
  updatePetAPI,
  deletePetReportAPI,
  getLostPetsNearbyAPI,
  createReportAPI,
  markPetAsFoundAPI  } from "lib/api";

const geocodingClient = mbxGeocoding({ accessToken: process.env.MAPBOX_TOKEN });

///
export function useSignUp(){

  const navigate = useNavigate();

  const [persistedUserData, setPersistedUserData] = useAtom(userDataAtom);
  const [login, setLogin] = useAtom(isLoggedInAtom);
  const setToken = useSetAtom(tokenAtom);
  const setUserId = useSetAtom(userIdAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  async function getUserData(data){

    if(data.newUserPassword !== data.confirmPassword){
        setPasswordError("ⓘ Las contraseñas no coinciden");
    } else {
        setPasswordError("");
        const user = {
          fullname: data.newUserName,
          email: data.newUserEmail,
          location: data.newUserLocation,
          password: data.newUserPassword
        }

        setIsLoading(true);
        const res = await signUpAPI(user);
        setIsLoading(false);

        const userToken = res.token;
        setToken(userToken);

        const meData = await getMeAPI(userToken);
        setUserId(meData.id);

        setPersistedUserData({
          fullname: data.newUserName,
          email: data.newUserEmail,
          location: data.newUserLocation
        });

        setLogin(true);
        // console.log("usuario creado", res);
        navigate("/user-location");
    };
  };
  return { getUserData, isLoading, passwordError };
};

///
export function useSignIn(){

  const navigate = useNavigate();

  const [login, setLogin] = useAtom(isLoggedInAtom);
  const [token, setToken] = useAtom(tokenAtom);
  const [persistedUserData, setPersistedUserData] = useAtom(userDataAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const setUserId = useSetAtom(userIdAtom);

  async function handleLogin(email, password) {

    setIsLoading(true);
    const res = await signInAPI(email, password);
    setIsLoading(false);

    if(res.message == "confirmed") {
      const userToken = res.authenticatedUser;
      setToken(userToken);

      const meData = await getMeAPI(userToken);
      setUserId(meData.id);
      setPersistedUserData({
        fullname: meData.fullname,
        email: meData.email,
        location: meData.location
      });

      setLogin(true);
      navigate("/user-location");

    } else {
      setLoginError("Email o contraseña incorrectos");
      setTimeout(() => {
        setLoginError("");
      }, 2000);
    };
  };
  return { handleLogin, isLoading, loginError };
};

///
export function useLogut(){

  const navigate = useNavigate();

  const setIsLoggedIn = useSetAtom(isLoggedInAtom);
  const setToken = useSetAtom(tokenAtom);
  const setUserData = useSetAtom(userDataAtom);
  const [isLoading, setIsLoading] = useState(false);

  function handleLogout(){
    setIsLoading(true);

    setTimeout(() => {
      setIsLoggedIn(false);
      setToken("");
      setUserData({
        fullname: "",
        email: "",
        location: ""
      });
      navigate("/");
    }, 1500);
  };
  return { handleLogout, isLoading };
};

///
export function useUpdateUser(){

  const token = useAtomValue(tokenAtom);
  const userId = useAtomValue(userIdAtom);
  const [userData, setUserData] = useAtom(userDataAtom);
  const [isLoading, setIsLoading] = useState(false);

  async function handleUpdateUser(data) {
    setIsLoading(true);

    const res = await updateUserAPI(userId, data.fullname, data.location, token);

    setUserData({
      fullname: data.fullname,
      email: userData.email,
      location: data.location
    });

    setTimeout(() => {
      setIsLoading(false);
      window.location.reload();
    }, 1500);
  }
  return { handleUpdateUser, isLoading };
};

///
export function useUpdatePassword(){

  const navigate = useNavigate()

  const token = useAtomValue(tokenAtom);
  const userId = useAtomValue(userIdAtom);
  const [isLoading, setIsLoading] = useState(false);
   const [passwordError, setPasswordError] = useState("");

  async function handleUpdatePassword(data) {

    if(data.password !== data.confirmPassword){
      setPasswordError("ⓘ Las contraseñas no coinciden");
    } else {
      setPasswordError("");
      setIsLoading(true);

      const res = await updatePasswordAPI(userId, data.password, token)

      setTimeout(() => {
        setIsLoading(false);
        navigate("/user-data");
      }, 1500);
    };
  };
  return { handleUpdatePassword, isLoading, passwordError };
};

///
export function useMapSearch(){

  const [pet, setPet] = useAtom(petAtom);
  const [error, setError] = useAtom(petReportErrorsAtom);

  async function handleMapSearch(location) {
    
    const res = await geocodingClient.forwardGeocode({
      query: location,
      countries: ["ar"],
      limit: 1
    }).send();

    const feature = res.body.features[0];

    if(feature){
      const [lng, lat] = feature.geometry.coordinates;
      const location = feature.place_name;

      setPet((prev) => ({ ...prev, lng, lat, location }));
      setError((prev) => ({ ...prev, locationError: "" }));
    };
  };
  return { handleMapSearch, pet }
};

///
export function useReportPet(){

  const navigate = useNavigate();

  const token = useAtomValue(tokenAtom);
  const pet = useAtomValue(petAtom);
  const [errors, setErrors] = useAtom(petReportErrorsAtom);
  const [isLoading, setIsLoading] = useState(false);

  const name = pet.name;
  const pictureURL = pet.pictureURL;
  const location = pet.location;
  const lat = pet.lat;
  const lng = pet.lng;

  async function handleReportPet() {

    if(!pet.name) {
      setErrors((prev) => ({ ...prev, nameError: "ⓘ Por favor ingresá el nombre de la mascota" }));
      document.querySelector('#report-pet-name')?.scrollIntoView({ behavior: "smooth" });
      return;
    };
    if(!pet.pictureURL) {
      setErrors((prev) => ({ ...prev, pictureError: "ⓘ Por favor agregá una foto de la mascota" }));
      document.querySelector('#report-pet-picture')?.scrollIntoView({ behavior: "smooth" });
      return;
    };
    if(!pet.location) {
      setErrors((prev) => ({ ...prev, locationError: "ⓘ Por favor buscá una ubicación en el mapa" }));
      document.querySelector('#report-pet-location')?.scrollIntoView({ behavior: "smooth" });
      return;
    };
    
    setIsLoading(true);
    const res = await createPetAPI(name, pictureURL, location, lat, lng, token);
    setIsLoading(false);

    // console.log("mascota reportada:", res)
    navigate("/my-reported-pets");
  };
  return { handleReportPet, isLoading };
;}

///
export function useGetMyPets(){

  const token = useAtomValue(tokenAtom);
  const [myPets, setMyPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMyPets() {

    setIsLoading(true);
    const res = await getMyPetsAPI(token);
    // console.log("mis mascotas", res)
    setMyPets(res);
    setIsLoading(false);
  };
  return { fetchMyPets, myPets, isLoading, token };
};

///
export function useGetPetById(){

  const petId = useAtomValue(selectedPetIdAtom);
  const [selectedPet, setSelectedPet] = useAtom(selectedPetAtom);

  async function fetchPet() {
    
    const res = await getPetByIdAPI(petId);
    setSelectedPet(res);
  };
  return { fetchPet, selectedPet, petId };
};

///
export function useUpdatePet(){

  const navigate = useNavigate();
  const selectedPet = useAtomValue(selectedPetAtom);
  const pet = useAtomValue(petAtom);

  async function handleUpdatePet(name, location) {
    
    const res = await updatePetAPI(
      name || selectedPet.name,
      pet.pictureURL || null,
      location || selectedPet.location,
      pet.lng || selectedPet.lng,
      pet.lat || selectedPet.lat,
      selectedPet.id
    );
    // console.log("mascota actualizada:", res);
    navigate("/my-reported-pets");
  };
  return { handleUpdatePet };
};

///
export function useDeletePetReport(){

  const navigate = useNavigate();

  const token = useAtomValue(tokenAtom);
  const selectedPet = useAtomValue(selectedPetAtom);
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeletePetReport() {
    
    const res = await deletePetReportAPI(selectedPet.id, token);

    navigate("/my-reported-pets");
  };
  return { handleDeletePetReport };
};

///
export function useGetLostPetsNearby(){

  const coordinates = useAtomValue(userCoordinates);
  const [lostPets, setLostPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchLostPets() {

    // console.log("coordenadas:", coordinates);
    setIsLoading(true);
    const res = await getLostPetsNearbyAPI(coordinates.lat, coordinates.lng);
    // console.log("mascotas cerca:", res);

    setLostPets(res);
    setIsLoading(false);
  };
  return { fetchLostPets, lostPets, isLoading };
};

///
export function useCreateReport(){

  async function handleCreateReport(name, phone, description, pet_id) {
  
    const res = await createReportAPI(name, phone, description, pet_id);
    // console.log("reporte reado;", res);
  };
  return { handleCreateReport };
};

///
export function useMarkPetAsFound(){

  const navigate = useNavigate();
  const token = useAtomValue(tokenAtom);
  const selectedPet = useAtomValue(selectedPetAtom);

  async function handleMarkPetAsFound() {

    const petId = selectedPet.id;

    const res = await markPetAsFoundAPI(petId, token);
    // console.log("mascota marcada como encontrada", res);
    navigate("/lost-pets-nearby");
  };
  return { handleMarkPetAsFound };
};