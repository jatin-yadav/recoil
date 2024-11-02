import { useRecoilValue } from "recoil";
import {
  jobsAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
} from "./store/atoms/navbarAtoms";
import { navbartotalSelector } from "./store/selectors/navbarSelectors";

const NavBar = () => {
  const notificationCount = useRecoilValue(notificationAtom);
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagesCount = useRecoilValue(messageAtom);
  const totalNotificationCount = useRecoilValue(navbartotalSelector);
  return (
    <div>
      <button>Notification({notificationCount})</button>
      <button>Network({networkCount})</button>
      <button>Jobs({jobsCount})</button>
      <button>Messages({messagesCount})</button>
      <button>ME({totalNotificationCount})</button>
    </div>
  );
};

export default NavBar;
