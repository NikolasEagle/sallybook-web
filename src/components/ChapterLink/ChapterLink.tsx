import styles from "./ChapterLink.module.scss";

import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";

interface Props {
  icon: string;
  name: string;
  href: string;
  active: boolean;
}

export default function ChapterLink({ icon, name, href, active }: Props) {
  const router = useRouter();

  const dispatch = useDispatch();

  function goToChapter() {}

  return (
    <div onClick={goToChapter} tabIndex={0} className={styles.ChapterLink}>
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
}
