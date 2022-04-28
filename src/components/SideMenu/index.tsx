import { AiFillHome } from "react-icons/ai";
import { FaMusic } from "react-icons/fa";
import styles from "./styles.module.scss";

export function SideMenu() {
  return (
    <>
      <div className={styles.sideMenu}>
        <span className={styles.user}>
          <img
            src="https://avatars.githubusercontent.com/u/61669995?v=4"
            alt="Users photo"
          />
          <h3>Iago Bortolon</h3>
        </span>
        <div className={styles.navigation}>
          <nav>
            <span>
              <AiFillHome />
              <a href="/">Home</a>
            </span>
            <span>
              <FaMusic />
              <a href="/">Playlists</a>
            </span>
          </nav>
        </div>
      </div>
    </>
  );
}
