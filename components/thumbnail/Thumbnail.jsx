import Image from "next/image";
import YoutubeIcon from "@/icons/YoutubeIcon";
import styles from "./Thumbnail.module.css";

export default function Thumbnail({ thumbnail }) {
  return (
    <div className={styles.thumbnailWrapper}>
      <Image
        className={styles.thumbnail}
        src={thumbnail}
        alt="Imagen de fachada"
        fill
        priority
      />
      <YoutubeIcon className={styles.icon} />
    </div>
  );
}
