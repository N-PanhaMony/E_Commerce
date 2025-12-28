import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import Email from "@/components/Email";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "AngkorAi",
  description: "Shop Khmer Temple paintings and stickers online.",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
    <html lang="en">
      <Head />
      <body>
        <div id="portal" />
        <div id="app">
          <header>
            <div className="header-content">
              <Link href={'/'}>
                <h1>AngkorAi</h1>
              </Link>
              <p className="mid-text">Khmer Temple Paintings & Stickers</p>
              <div className="cart">
                <Cart />
              </div>
            </div>
          </header>

          <main>
            {children}
          </main>

          <footer>
            <div className="email-container">
              <h5>Any information & feedback</h5>
              <Email />
            </div>

            <div className="link-container">
              <div>
                <h3>Team</h3>
                <Link href={'/team'}>Our Team</Link>
                <Link href={'/developer'}>Developer</Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link href={'/'}>Home</Link>
                <Link href={'/cart'}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href={'/contact'}>Contact</Link>
              </div>
            </div>

            <div className="socials">
              <p>
                © {new Date().getFullYear()} <a href="https://.com" target="_blank">MoNi</a><br />
                Built with NextJS & <a target="_blank" href="https://www.fantacss.smoljames.com">FantaCSS</a> 🔥
              </p>
              <div className="social-links">
                <Link href={'https://github.com/'} target="_blank">
                  <i className="fa-brands fa-github" aria-label="GitHub"></i>
                </Link>
                <Link href={'https://linkedin.com/in/'} target="_blank">
                  <i className="fa-brands fa-linkedin" aria-label="LinkedIn"></i>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
    </ProductsProvider>
  );
}
