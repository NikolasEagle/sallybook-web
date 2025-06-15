"use client";

import { useEffect, useState } from "react";
import styles from "./UserInfo.module.scss";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { RESET_BOOKS } from "@/lib/features/books/booksSlice";
import { RESET_CHAPTERS } from "@/lib/features/chapters/chaptersSlice";
import { RESET_LOGIN } from "@/lib/features/login/loginSlice";
import { RESET_REGISTER } from "@/lib/features/register/registerSlice";
import Image from "next/image";

export default function UserInfo() {
  const router = useRouter();

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState<string>("");

  const [secondName, setSecondName] = useState<string>("");

  async function getUserInfo() {
    const url = `/auth/check_auth`;
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
      });
      if (response.status === 200) {
        const json = await response.json();

        const data = JSON.parse(json);

        const { second_name, first_name } = data;

        setSecondName(second_name);
        setFirstName(first_name);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    const url = `/auth/logout`;
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
      });
      if (response.status === 200) {
        localStorage.clear();
        dispatch(RESET_BOOKS());
        dispatch(RESET_CHAPTERS());
        dispatch(RESET_LOGIN());
        dispatch(RESET_REGISTER());
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserInfo();
  });

  return (
    <div className={styles.UserInfo}>
      <Image
        width={"200"}
        height={"200"}
        className={styles.avatar}
        src="/avatar.png"
        alt="avatar"
      />
      <h2>{secondName}</h2>
      <h2>{firstName}</h2>
      <button onClick={logout} className={styles.logout}>
        Выйти из аккаунта
      </button>
    </div>
  );
}
