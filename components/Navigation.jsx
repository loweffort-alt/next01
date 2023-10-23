import Link from "next/link";
import styles from "./Navigation.module.css";

const links = [
  {
    label: "home",
    link: "/",
  },
  {
    label: "about",
    link: "/about",
  },
  {
    label: "posts",
    link: "/posts",
  },
];

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, link }) => (
            <li key={label}>
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
