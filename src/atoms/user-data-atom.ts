import { atomWithStorage } from "jotai/utils";

export const userDataAtom = atomWithStorage('userData', {
    fullname: "",
    email: "",
    location: ""
});