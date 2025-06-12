import { useRouter } from "next/navigation";
import styles from "./SuccessMessage.module.scss";

interface Props {
  email: string;
}

export function SuccessMessage({ email }: Props) {
  const router = useRouter();

  function goToLoginPage() {
    router.push("/login");
  }

  return (
    <div className={styles.SuccessMessage}>
      <h2>Регистрация прошла успешно!</h2>
      <h3>Данные для входа отправлены на</h3>
      <h4>{email}</h4>
      <button className={styles.back} onClick={goToLoginPage}>
        Перейти на страницу авторизации
      </button>
    </div>
  );
}
