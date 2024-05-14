import styles from "./Iframe.module.css";

export default function Iframe({ iframe }) {
  return (
    <div className={styles.iframeWrapper}>
      <iframe
        className={styles.iframe}
        src={iframe}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
