import type { NextPage } from "next";
import Head from "next/head";
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
        </main>
      </div>
    </>
  );
};

export default Home;
