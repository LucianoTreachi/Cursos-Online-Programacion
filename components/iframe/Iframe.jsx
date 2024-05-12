import styles from "./Iframe.module.css";

export default function Iframe({ src }) {
  return (
    <iframe
      className={styles.iframe}
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
    ></iframe>
  );
}
