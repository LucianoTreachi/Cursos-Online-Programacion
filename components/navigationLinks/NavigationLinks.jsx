import Link from "next/link";
import Container from "@/components/container/Container";
import ArrowLeftIcon from "@/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/icons/ArrowRightIcon";
import styles from "./NavigationLinks.module.css";

export default async function NavigationLinks({
  prevHref,
  prevText,
  nextHref,
  nextText,
}) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.containerButtons}>
          <Link href={prevHref}>
            <ArrowLeftIcon /> {prevText}
          </Link>
          <Link href={nextHref}>
            {nextText} <ArrowRightIcon />
          </Link>
        </div>
      </Container>
    </section>
  );
}
