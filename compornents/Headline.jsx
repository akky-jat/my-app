import React from "react";
import ReactDom from "react-dom";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export function Headline(props) {
  console.log(props);
  return (
    <>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
    </>
  );
}
