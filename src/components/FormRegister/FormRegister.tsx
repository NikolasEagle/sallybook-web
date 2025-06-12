"use client";

import Form from "next/form";

import styles from "./FormRegister.module.scss";
import FormHeader from "../FormHeader/FormHeader";
import { FormEvent, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function FormRegister() {
  const [message, setMessage] = useState<string>("");

  const url = `http://${process.env.NEXT_PUBLIC_HOST_SERVER_AUTH}:${process.env.NEXT_PUBLIC_PORT_SERVER_AUTH}/register`;

  async function register(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const password = formData.get("password");

    const repeatPassword = formData.get("repeat_password");

    try {
      if (password === repeatPassword) {
        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });
        if (response.status === 201) {
          formData.get
        } else if (
          response.status === 401 ||
          response.status === 409 ||
          response.status === 500
        ) {
          throw new Error(await response.text());
        }
      } else {
        throw new Error("Passwords don't match");
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      }
    }
  }

  return (
    <Form
      action={""}
      onSubmit={(event) => register(event)}
      className={styles.FormRegister}
    >
      <FormHeader name={"Регистрация"} />
      <input required type="text" name="second_name" placeholder="Фамилия" />
      <input required type="text" name="first_name" placeholder="Имя" />
      <input
        pattern="^\S+@\S+\.\S+$"
        required
        type="text"
        name="email"
        placeholder="Email"
      />
      <input
        required
        type="password"
        name="password"
        placeholder="Придумайте пароль"
      />
      <input
        required
        type="password"
        name="repeat_password"
        placeholder="Повторите пароль"
      />
      <button type="submit">Регистрация</button>
      <ErrorMessage message={message} />
    </Form>
  );
}
