import Form from "next/form";

import styles from "./FormRegister.module.scss";

export default function FormRegister() {
  return (
    <Form
      action={`http://${process.env.NEXT_PUBLIC_HOST_SERVER_AUTH}:${process.env.NEXT_PUBLIC_PORT_SERVER_AUTH}/register`}
      className={styles.FormRegister}
    >
      <input required type="text" name="second_name" placeholder="Фамилия" />
      <input required type="text" name="first_name" placeholder="Имя" />
      <input required type="text" name="email" placeholder="Email" />
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
    </Form>
  );
}
