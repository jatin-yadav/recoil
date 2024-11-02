import { atom } from "recoil";

export const notificationAtom = atom({
  key: "notificationCount",
  default: 102,
});

export const networkAtom = atom({
  key: "networkCount",
  default: 0,
});

export const jobsAtom = atom({
  key: "jobsCount",
  default: 0,
});

export const messageAtom = atom({
  key: "messageCount",
  default: 12,
});
