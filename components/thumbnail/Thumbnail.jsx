import Image from "next/image";
import YoutubeIcon from "@/icons/YoutubeIcon";
import styles from "./Thumbnail.module.css";

export default function Thumbnail({ thumbnail, title }) {
  return (
    <div className={styles.thumbnailWrapper}>
      <button aria-label="Ver el curso ahora">
        <Image
          className={styles.thumbnail}
          src={thumbnail}
          alt={title}
          fill
          priority
        />
        <YoutubeIcon className={styles.icon} />
      </button>
    </div>
  );
}
