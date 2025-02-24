import ChapterLink from "../ChapterLink/ChapterLink";
import styles from "./Footer.module.scss";

const chapters = [
  {
    icon: "/home.svg",

    name: "Главная",
  },
  {
    icon: "/settings.svg",

    name: "Настройки",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {chapters.map((chapter) => (
        <ChapterLink icon={chapter.icon} name={chapter.name} />
      ))}
    </footer>
  );
}
