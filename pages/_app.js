import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BottomNav from "../components/NavBar/BottomNav";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Head>
        <link
          rel="preload"
          href="/fonts/1_MinecraftRegular1.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/2_MinecraftItalic1.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/3_MinecraftBold1.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/4_MinecraftBoldItalic1.woff"
          as="font"
          crossOrigin=""
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <BottomNav />
    </Provider>
  );
}

export default MyApp;
