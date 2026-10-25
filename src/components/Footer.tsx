import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "../lib/navigation";

const year = new Date().getFullYear();

const footerLinks = [
  { label: "Products", href: "/products" },
  { label: "Pool tables", href: "/pool-table" },
  { label: "Billiard balls", href: "/billiard-balls" },
  { label: "Cue sticks", href: "/billiard-cue" },
  { label: "Services", href: "/services" },
  { label: "Brands", href: "/brands" },
];

export default function Footer() {
  return (
    <footer className="bg-editorial-dark text-editorial-text">
      <div className="page-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr] lg:gap-12 lg:py-16">
        <div>
          <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-editorial-text">OM Billiard</Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-editorial-muted">
            Tables, cues and support for the game room you have in mind.
          </p>
          <div className="footer-credit-art" aria-hidden="true">
            <div className="footer-credit-orbit" />
            <div className="footer-credit-track" />
            <div className="footer-credit-ball"><span>8</span></div>
            <div className="footer-credit-spark footer-credit-spark-one" />
            <div className="footer-credit-spark footer-credit-spark-two" />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-editorial-muted">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-sm text-editorial-text/85 transition-colors hover:text-gold">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-editorial-muted">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-6 text-editorial-text/85">
            <a href="tel:+919810508355" className="block hover:text-gold">+91 98105 08355</a>
            <a href="mailto:askombilliard@gmail.com" className="block break-all hover:text-gold">askombilliard@gmail.com</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Gali+No.+2%2C+Fng+Vihar+2%2C+near+Garhi%2C+Chokhandi%2C+Sector+121%2C+Noida%2C+Uttar+Pradesh+201309" target="_blank" rel="noreferrer" className="block hover:text-gold">
              Sector 121, Noida, Uttar Pradesh 201309
            </a>
            <p className="text-editorial-muted">Mon–Sat, 9 am–7 pm</p>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-editorial-muted">Follow</h2>
          <div className="mt-4 flex gap-3">
            <a href="https://www.facebook.com/Ombilliardofficial?rdid=O8QRoFt0GJubO15Q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fx1KLXTqn7qVtUccS%2F" target="_blank" rel="noreferrer" aria-label="OM Billiard on Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-editorial-muted/30 text-editorial-text transition-colors hover:border-gold hover:text-gold"><FaFacebook aria-hidden="true" /></a>
            <a href="https://www.instagram.com/ombilliardofficial/" target="_blank" rel="noreferrer" aria-label="OM Billiard on Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-editorial-muted/30 text-editorial-text transition-colors hover:border-gold hover:text-gold"><FaInstagram aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-editorial-muted/15">
        <div className="page-shell flex flex-col gap-2 py-4 text-xs text-editorial-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} OM Billiard. All rights reserved.</p>
          <p>Developed &amp; maintained by <a href="https://ankitsharma745.github.io/" target="_blank" rel="noopener noreferrer" className="footer-developer-link">Ankit Sharma <span aria-hidden="true">↗</span></a></p>
        </div>
      </div>
    </footer>
  );
}
