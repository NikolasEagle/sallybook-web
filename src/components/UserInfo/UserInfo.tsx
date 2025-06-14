import styles from "./UserInfo.module.scss";

export default function UserInfo() {
  return (
    <div className={styles.UserInfo}>
      <img className={styles.avatar} src="/avatar.png" alt="avatar" />
      <h2></h2>
      <h2></h2>
      <button className={styles.logout}>Выйти из аккаунта</button>
    </div>
  );
}
