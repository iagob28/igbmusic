import type { NextPage } from "next";
import Head from "next/head";
import { SideMenu } from "../components/SideMenu";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | igbMusic</title>
      </Head>
      <SideMenu />
    </>
  );
};

export default Home;
