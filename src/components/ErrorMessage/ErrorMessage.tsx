import styles from "./ErrorMessage.module.scss";

interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return <p className={styles.ErrorMessage}>{message}</p>;
}
