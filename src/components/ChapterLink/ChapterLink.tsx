import Link from "next/link";
import styles from "./ChapterLink.module.scss";

interface Props {
  icon: string;
  name: string;
  href: string;
}

export default function ChapterLink({ icon, name, href }: Props) {
  return (
    <Link href={href} autoFocus tabIndex={0} className={styles.ChapterLink}>
      <img src={icon} alt={name} />
      <p>{name}</p>
    </Link>
  );
}
