import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import Email from "@/components/Email";

export const metadata = {
  title: "E_Commerce",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body>
        <div id="portal"/>
        <div id="app">
          <header>
            <div className="header-content">
              <Link href={'/'}>
                <h2>EStore</h2>
              </Link>
              <Cart/>
            </div>
          </header>
          <main>
            {children}
          </main>
          <footer>
            <div className="email-container">
              <h5>Any informaton & feedback</h5>
              <Email/>
            </div>

            <div className="link-container">
              <div>
                <h3>Team</h3>
                <Link href={'/'}>Our Team</Link>
                <Link href={'/'}>Developer</Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link href={'/'}>Home</Link>
                <Link href={'/cart'}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href={'/'}>Contect</Link>
              </div>
            </div>

            <div className="socials">
                <p>© <a href="https:" target="_blank">MoNi</a> 2025<br />Built with NextJS & <a target="_blank" href="https://www.fantacss.smoljames.com">FantaCSS</a> 🔥</p>
                <div className="social-links">
                  <Link href={'/'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                  <Link href={'/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
              </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
