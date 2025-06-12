import Form from "next/form";

export default function FormRegister() {
  return (
    <Form
      action={`http://${process.env.NEXT_PUBLIC_HOST_SERVER_AUTH}:${process.env.NEXT_PUBLIC_PORT_SERVER_AUTH}/register`}
    >
      <input type="text" name="second_name" placeholder="Фамилия" />
      <input type="text" name="first_name" placeholder="Имя" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Придумайте пароль" />
      <input
        type="password"
        name="repeat_password"
        placeholder="Повторите пароль"
      />
      <button type="submit">Регистрация</button>
    </Form>
  );
}
