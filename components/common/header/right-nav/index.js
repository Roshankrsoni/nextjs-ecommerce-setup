import Link from "next/link";
import styles from "../header.module.scss";
import Button from "../../button";

/**
 * The right-side navigation component for the application header.
 *
 * @returns {JSX.Element} A navigation component showing sign-in, register, and cart options.
 */
const RightSideNav = () => {
  const isAuthenticated = false; // Placeholder for authentication status

  // Function to handle sign-out action
  const signOut = () => {};

  // Function to handle cart action
  const handleCart = () => {};

  return (
    <>
      <nav aria-labelledby="secondary-nav">
        <div className={styles["app-header--secondary-nav"]}>
          <ul>
            {!isAuthenticated ? (
              <>
                <li>
                  <Link href="/login">Sign in</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
              </>
            ) : (
              <li>
                <Button variant="transparent" onClick={signOut}>
                  Sign out
                </Button>
              </li>
            )}
          </ul>
          <Button
            variant="transparent"
            className={styles["app-header--secondary-nav--cart-btn"]}
            onClick={handleCart}
          >
            <svg
              version="1.1"
              id="Layer_1"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            0 Items
          </Button>
        </div>
      </nav>
    </>
  );
};

export default RightSideNav;
