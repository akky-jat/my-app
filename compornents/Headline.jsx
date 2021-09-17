import React from "react";
import ReactDom from "react-dom";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Headline(props) {
  console.log(props);
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{props.page}.js</code>
      </p>
    </>
  );
}
