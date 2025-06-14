import UserInfo from "@/components/UserInfo/UserInfo";
import styles from "./profile.module.scss";

export default function ProfilePage() {
  return (
    <div className={styles.ProfilePage}>
      <UserInfo />
    </div>
  );
}
