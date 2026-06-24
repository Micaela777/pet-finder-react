import { atomWithStorage } from "jotai/utils";

export const userCoordinates = atomWithStorage("userCoordinates", {
  lat: 0,
  lng: 0
});