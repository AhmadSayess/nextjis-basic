import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
// import Footer from "../comps/Footer";
// import NavBar from "../comps/NavBar";

export default function Home() {
  return (
    <div>
      <> 
      <Head>
        <title>Next Js | Home </title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <h1 className={styles.title}>hello next js </h1>
      <p className={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <p className={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja List</a>
      </Link>
      </>
    </div>
  );
}
