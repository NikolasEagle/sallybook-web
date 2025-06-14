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

  const isLoadingBooks = useSelector(
    (state: StateBooks) => state.books.isLoading
  );

  const isLoadingRegister = useSelector(
    (state: StateRegister) => state.register.isLoading
  );

  const isLoadingLogin = useSelector(
    (state: StateLogin) => state.login.isLoading
  );

  let isLoading: boolean;

  if (regex.test(pathName)) {
    isLoading = isLoadingBooks;
  } else if (regexRegister.test(pathName)) {
    isLoading = isLoadingRegister;
  } else if (regexLogin.test(pathName)) {
    isLoading = isLoadingLogin;
  }
  isLoading = false;

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
