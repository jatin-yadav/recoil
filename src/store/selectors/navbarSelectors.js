import { selector } from "recoil";
import {
  jobsAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
} from "../atoms/navbarAtoms";

export const navbartotalSelector = selector({
  key: "navbartotalCount",
  get: ({ get }) => {
    const notificationCount = get(notificationAtom);
    const networkCount = get(networkAtom);
    const jobsCount = get(jobsAtom);
    const messageCount = get(messageAtom);

    return notificationCount + networkCount + jobsCount + messageCount;
  },
});
