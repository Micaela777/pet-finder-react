import { atom } from "jotai";

export const selectedPetAtom = atom({
    id: 0,
    name: "",
    pictureURL: "",
    location: "",
    lat: 0,
    lng: 0
});