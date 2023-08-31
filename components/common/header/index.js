import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import dynamic from "next/dynamic";
import appLogo from "../../../public/logo.png";

// Dynamically import the RightSideNav component without server-side rendering (SSR).
const RightSideNav = dynamic(() => import("./right-nav"), { ssr: false });

/**
 * The header component for the application.
 *
 * @returns {JSX.Element} A header component containing the logo, navigation, and right-side navigation.
 */
const AppHeader = () => {
  return (
    <>
      <header className={styles["head-section"]}>
        <div className={styles["app-header"]}>
          <Link href="/">
            <Image
              src={appLogo}
              alt="Sabka Bazaar logo"
              width={190}
              height={86}
            />
          </Link>
          <nav
            aria-labelledby="main-nav"
            className={styles["app-header--home-page-nav"]}
          >
            <div>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
              </ul>
            </div>
          </nav>
          <RightSideNav />
        </div>
      </header>
    </>
  );
};

export default AppHeader;
