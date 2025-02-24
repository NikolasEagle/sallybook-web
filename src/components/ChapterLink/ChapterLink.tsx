import styles from "./ChapterLink.module.scss";

interface Props {
  icon: string;
  name: string;
}

export default function ChapterLink({ icon, name }: Props) {
  return (
    <div tabIndex={0} className={styles.ChapterLink}>
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
}
