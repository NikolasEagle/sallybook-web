import styles from "./register.module.scss";

import FormRegister from "@/components/FormRegister/FormRegister";

export default function RegisterPage() {
  return (
    <div className={styles.register}>
      <FormRegister />
    </div>
  );
}
