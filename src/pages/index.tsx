import type { NextPage } from "next";
import Head from "next/head";
import { ScrollDisplay } from "../components/ScrollDisplay";
import { Searchbar } from "../components/Searchbar";
import { SideMenu } from "../components/SideMenu";
import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | igbMusic</title>
      </Head>
      <div className={styles.container}>
        <SideMenu />
        <main className={styles.background}>
          <Searchbar />
          <h2>Featured playlists</h2>
          <ScrollDisplay />
          <h2>Top Musics</h2>
          <ScrollDisplay />
        </main>
      </div>
    </>
  );
};

export default Home;
