import "@/styles/globals.css";
import Structure from "../../components/layout/Structure";
import Head from "next/head";
import { AiOutlineDollarCircle } from "react-icons/ai";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sayz</title>
        <meta name="Ecommerce App" content="Developed by Next js framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={AiOutlineDollarCircle} />
      </Head>
      <Structure>
        <Component {...pageProps} />
      </Structure>
    </>
  );
}
