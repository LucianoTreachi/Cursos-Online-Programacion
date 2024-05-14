"use client";

import { useState } from "react";
import Iframe from "@/components/iframe/Iframe";
import Thumbnail from "@/components/thumbnail/Thumbnail";
import styles from "./Video.module.css";

export default function Video({ thumbnail, iframe }) {
  const [loading, setLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setShowVideo(true);
  };

  return (
    <div onClick={handleClick}>
      {loading && <p className={styles.message}>Cargando video...</p>}
      {showVideo ? (
        <Iframe iframe={iframe} setLoading={setLoading} />
      ) : (
        <Thumbnail thumbnail={thumbnail} setLoading={setLoading} />
      )}
    </div>
  );
}
