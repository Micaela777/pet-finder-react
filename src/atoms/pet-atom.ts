import { atom } from "jotai";

export const petAtom = atom({
  name: "",
  pictureURL: "",
  location: "",
  lat: 0,
  lng: 0
});