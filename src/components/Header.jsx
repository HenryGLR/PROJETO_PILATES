import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/site";
import { Brand, WhatsAppLink } from "./Shared";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
      if (event.key !== "Tab") return;
      const links = [...header.current.querySelectorAll("a, button")].filter(
        (el) => el.getClientRects().length,
      );
      const first = links[0],
        last = links.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 1100) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = (event) => {
    setOpen(false);
    const id = event.currentTarget.hash?.slice(1);
    if (id)
      requestAnimationFrame(() =>
        document.getElementById(id)?.focus({ preventScroll: true }),
      );
  };

  return (
    <header
      ref={header}
      className={`header${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}`}
    >
      <div className="container header-inner">
        <Brand onClick={close} />
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={`navigation${open ? " is-open" : ""}`}
          aria-label="Navegação principal"
        >
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={close}>
              {label}
            </a>
          ))}
          <WhatsAppLink className="header-cta" />
        </nav>
      </div>
    </header>
  );
}
