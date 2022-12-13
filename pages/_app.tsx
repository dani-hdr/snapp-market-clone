import "../styles/Global.css";
import "swiper/css/bundle";
import type { AppProps } from "next/app";
import MenuContext from "../context/MenuContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MenuContext>
    <Component {...pageProps} />
  </MenuContext>
  )
   
  ;
}
