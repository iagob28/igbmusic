import { FaSearch } from "react-icons/fa";
import styles from "./styles.module.scss";

export function Searchbar() {
  return (
    <div className={styles.searchInput}>
      <input
        type="search"
        id="search"
        placeholder="Search artists, playlists or songs"
      />
      <label htmlFor="search">
        <FaSearch color="rgb(100, 31, 128)" />
      </label>
    </div>
  );
}
