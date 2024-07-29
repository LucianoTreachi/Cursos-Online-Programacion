"use client";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import CheckIcon from "@/icons/CheckIcon";
import ShareIcon from "@/icons/ShareIcon";
import styles from "./ShareCourse.module.css";

export default function ShareCourse() {
  // Manage the state of the button
  const [clicked, setClicked] = useState(false);

  // Manage the state of the current page URL
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <CopyToClipboard text={currentUrl}>
      <button className={styles.button} onClick={handleClick}>
        {clicked ? (
          <>
            <CheckIcon />
            <span>URL copiada. Puedes pegarla en donde quieras.</span>
          </>
        ) : (
          <>
            <ShareIcon />
            <span> Compartir curso</span>
          </>
        )}
      </button>
    </CopyToClipboard>
  );
}
