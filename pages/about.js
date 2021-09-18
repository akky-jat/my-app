import Head from "next/head";
import Image from "next/image";
import { Footer } from "../compornents/Footer";
import { Headline } from "../compornents/Headline";
import { Links } from "../compornents/Links";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Headline title="about pages" page="about" />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
