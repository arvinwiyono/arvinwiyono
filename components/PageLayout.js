import Head from "next/head";
import styles from "../styles/page_layout.module.scss";

export default function PageLayout({ children }) {
  return (
    <>
      <Head>
        <title>Arvin Wiyono</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/jam-icons/css/jam.min.css"
        ></link>
      </Head>
      <div className={styles.pageWrapper}>
        <main className="page-layout py-16 px-8 max-w-md sm:max-w-lg sm:px-0 mx-auto">
          {children}
        </main>
        <footer className={styles.footer}>
          <div>さよなら 👋</div>
          <code>@awiy1-2020</code>
        </footer>
      </div>
    </>
  );
}
