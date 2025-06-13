import styles from "./Download.module.scss";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";
import { usePathname } from "next/navigation";
import { StateRegister } from "@/lib/features/register/registerSlice";
import { StateLogin } from "@/lib/features/login/loginSlice";

export default function Download() {
  const pathName = usePathname();

  const regex = new RegExp(`^\/home|bookPage`);

  const regexRegister = new RegExp(`^\/register`);

  const regexLogin = new RegExp(`^\/login`);

  let isLoading: boolean;

  if (regex.test(pathName)) {
    isLoading = useSelector((state: StateBooks) => state.books.isLoading);
  } else if (regexRegister.test(pathName)) {
    isLoading = useSelector((state: StateRegister) => state.register.isLoading);
  } else if (regexLogin.test(pathName)) {
    isLoading = useSelector((state: StateLogin) => state.login.isLoading);
  } else {
    isLoading = false;
  }

  return (
    <div
      id="download"
      style={isLoading ? { display: "flex" } : { display: "none" }}
      className={styles.Download}
    >
      <div className={styles.loader}></div>
    </div>
  );
}
