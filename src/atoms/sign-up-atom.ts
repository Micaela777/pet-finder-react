import { atom } from "jotai";

export const userDataAtom = atom({
  email: "mica@apx.school",
  password: "aptapt"
});

export const userDataUpperAtom = atom((get) => {
  const user = get(userDataAtom)
  return user
})