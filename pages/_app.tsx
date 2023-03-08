import "../styles/Global.css";
import "../styles/GallerySlider.css";
import "swiper/css/bundle";

import type { AppProps } from "next/app";
import Layout from "../components/layout";
import MenuContextProvider from "../context/MenuContext";
import CartContextProvider from "../context/CartContext";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MenuContextProvider>
        <CartContextProvider>
          <Layout>
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={true}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
      </MenuContextProvider>
    </Provider>
  );
}
