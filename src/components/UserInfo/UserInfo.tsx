"use client";

import { useEffect, useState } from "react";
import styles from "./UserInfo.module.scss";

export default function UserInfo() {
  const [firstName, setFirstName] = useState<string>("");

  const [secondName, setSecondName] = useState<string>("");

  async function getUserInfo() {
    const url = `http://${process.env.NEXT_PUBLIC_HOST_SERVER_AUTH}:${process.env.NEXT_PUBLIC_PORT_SERVER_AUTH}/check_auth`;

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
    } catch (error) {}
  }

  useEffect(() => {
    getUserInfo();
  });

  return (
    <div className={styles.UserInfo}>
      <img className={styles.avatar} src="/avatar.png" alt="avatar" />
      <h2>{secondName}</h2>
      <h2>{firstName}</h2>
      <button className={styles.logout}>Выйти из аккаунта</button>
    </div>
  );
}
