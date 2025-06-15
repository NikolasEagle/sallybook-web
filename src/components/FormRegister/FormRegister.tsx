"use client";

import Form from "next/form";

import styles from "./FormRegister.module.scss";
import FormHeader from "../FormHeader/FormHeader";
import { FormEvent, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Download from "../Download/Download";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_LOADING,
  StateRegister,
} from "@/lib/features/register/registerSlice";
import { SuccessMessage } from "../SuccessMessage/SuccessMessage";
import Link from "next/link";

export default function FormRegister() {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state: StateRegister) => state.register.isLoading
  );

  const [message, setMessage] = useState<string>("");

  const [success, setSuccess] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");

  const url = `/auth/register`;

  async function register(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setMessage("");

    setEmail(String(formData.get("email")));

    const password = formData.get("password");

    const repeatPassword = formData.get("repeat_password");

    try {
      if (password === repeatPassword) {
        dispatch(SET_LOADING(true));
        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });

        if (response.status === 201) {
          dispatch(SET_LOADING(false));
          setSuccess(true);
        } else if (
          response.status === 401 ||
          response.status === 409 ||
          response.status === 500
        ) {
          dispatch(SET_LOADING(false));
          throw new Error(await response.text());
        }
      } else {
        dispatch(SET_LOADING(false));
        throw new Error("Passwords don't match");
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      }
    }
  }

  return isLoading ? (
    <Download />
  ) : success ? (
    <SuccessMessage email={email} />
  ) : (
    <div className={styles.FormRegister}>
      <Form
        action={""}
        onSubmit={(event) => register(event)}
        className={styles.form}
      >
        <FormHeader name={"Регистрация"} />
        <input
          autoComplete="off"
          required
          type="text"
          name="second_name"
          placeholder="Фамилия"
        />
        <input
          autoComplete="off"
          required
          type="text"
          name="first_name"
          placeholder="Имя"
        />
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
          placeholder="Придумайте пароль"
        />
        <input
          autoComplete="off"
          required
          type="password"
          name="repeat_password"
          placeholder="Повторите пароль"
        />
        <button type="submit">Регистрация</button>
      </Form>
      <Link className={styles.linkToLogin} href={"/login"}>
        На страницу входа
      </Link>
      <ErrorMessage message={message} />
    </div>
  );
}
