import Header from "../common/header";
import Footer from "../common/footer";
import styles from "../layout/Layout.module.scss";
import Head from "next/head";

/**
 * The layout component for the application.
 *
 * @param {ReactNode} children - The content to render within the layout.
 * @returns {JSX.Element} A layout component containing the header, content, and footer.
 */
const Layout = ({ children }) => {
  return (
    <>
      {/* Head section with metadata */}
      <Head>
        <title>Sabka Bazaar</title>
        <meta name="description" content="Sabka Bazaar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Main layout structure */}
      <div className={styles.layout}>
        <Header />
        <br />
        {/* Main content area */}
        <main className="app-main">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
