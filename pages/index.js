import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Footer } from "../compornents/Footer";
import { Links } from "../compornents/Links";
import { Headline } from "../compornents/Headline";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Headline title="Index Pages" page="index" />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
