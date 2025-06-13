"use client";

import Form from "next/form";

import styles from "./FormLogin.module.scss";
import FormHeader from "../FormHeader/FormHeader";
import { FormEvent, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Download from "../Download/Download";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOADING, StateLogin } from "@/lib/features/login/loginSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function FormLogin() {
  const router = useRouter();

  const dispatch = useDispatch();

  const isLoading = useSelector((state: StateLogin) => state.login.isLoading);

  const [message, setMessage] = useState<string>("");

  const url = `http://${process.env.NEXT_PUBLIC_HOST_SERVER_AUTH}:${process.env.NEXT_PUBLIC_PORT_SERVER_AUTH}/login`;

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      dispatch(SET_LOADING(true));
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (response.status === 200) {
        dispatch(SET_LOADING(false));
        router.push("/home");
      } else if (response.status === 401 || response.status === 500) {
        dispatch(SET_LOADING(false));
        throw new Error(await response.text());
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      }
    }
  }

  return isLoading ? (
    <Download />
  ) : (
    <div className={styles.FormLogin}>
      <Form
        className={styles.form}
        action={""}
        onSubmit={(event) => login(event)}
      >
        <FormHeader name={"Вход"} />
        <input
          autoComplete="off"
          pattern="^\S+@\S+\.\S+$"
          required
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          autoComplete="off"
          required
          type="password"
          name="password"
          placeholder="Пароль"
        />
        <button type="submit">Вход</button>

        <ErrorMessage message={message} />
      </Form>
      <Link className={styles.linkToRegister} href={"/register"}>
        Регистрация
      </Link>
    </div>
  );
}
