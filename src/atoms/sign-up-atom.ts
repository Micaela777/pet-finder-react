import { atom } from "jotai";

export const newUser = atom({
  fullname: "",
  email: "",
  location: "",
  password: ""
});

console.log("soy el atom", newUser)

export const userDataUpperAtom = atom((get) => {
  const user = get(newUser)
  return user
})

/* export const newUser = atom({
  location: null as null | {
    lat: number,
    lng: number
  },
  name: "",
  email: "",
  password: ""
});
*/ 