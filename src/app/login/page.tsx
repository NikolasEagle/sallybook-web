import styles from "./login.module.scss";

import FormLogin from "@/components/FormLogin/FormLogin";

export default function LoginPage() {
  return (
    <div className={styles.login}>
      <FormLogin />
    </div>
  );
}
