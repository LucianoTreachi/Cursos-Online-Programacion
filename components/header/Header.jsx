"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { links } from "./links/links";
import Link from "next/link";

import Container from "@/components/container/Container";
import Logo from "@/components/logo/Logo";
import CloseIcon from "@/icons/CloseIcon";
import HamburgerIcon from "@/icons/HamburgerIcon";
import styles from "./Header.module.css";

export default function Header() {
  // Open or Close the responsive menu
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Active link
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Logo />

          <div className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
            {/* Close Menu Button */}
            <button
              className={styles.closeMenuButton}
              onClick={toggleMenu}
              aria-label="Cerrar Menú de navegación"
            >
              <CloseIcon />
            </button>

            {/* Links */}
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={isActive(link.path) ? styles.active : ""}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Open Menu Button */}
          <button
            className={styles.openMenuButton}
            onClick={toggleMenu}
            aria-label="Menú de navegación"
            aria-expanded={isOpen}
          >
            <HamburgerIcon />
          </button>
        </nav>

        {/* Overlay */}
        <div
          className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        ></div>
      </Container>
    </header>
  );
}
