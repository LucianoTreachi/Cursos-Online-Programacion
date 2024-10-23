import Link from "next/link";
import Container from "@/components/container/Container";
import ArrowLeftIcon from "@/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/icons/ArrowRightIcon";
import styles from "./NavigationLinks.module.css";

export default async function NavigationLinks({
  prevHref,
  prevText,
  prevAriaLabel,
  nextHref,
  nextText,
  nextAriaLabel,
}) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.containerButtons}>
          <Link href={prevHref} aria-label={prevAriaLabel}>
            <ArrowLeftIcon /> {prevText}
          </Link>
          <Link href={nextHref} aria-label={nextAriaLabel}>
            {nextText} <ArrowRightIcon />
          </Link>
        </div>
      </Container>
    </section>
  );
}
