import styles from "./ChapterLink.module.scss";

import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";

import { SET_LOADING } from "@/lib/features/chapters/chaptersSlice";
import Image from "next/image";

interface Props {
  icon: string;
  iconActive: string;
  name: string;
  href: string;
  active: boolean;
}

export default function ChapterLink({
  icon,
  iconActive,
  name,
  href,
  active,
}: Props) {
  const router = useRouter();

  const dispatch = useDispatch();

  function goToChapter() {
    dispatch(SET_LOADING(true));
    router.push(href);
  }

  return (
    <div onClick={goToChapter} tabIndex={0} className={styles.ChapterLink}>
      <Image
        width={"200"}
        height={"200"}
        src={active ? iconActive : icon}
        alt={name}
      />
      <p style={active ? { fontWeight: "bold" } : { fontWeight: "normal" }}>
        {name}
      </p>
    </div>
  );
}
