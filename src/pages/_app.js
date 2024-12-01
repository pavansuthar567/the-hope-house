import { Provider } from "react-redux";
import store from "../store";
import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate.min.css";
import "@/vendors/font-awesome.min.css";
import "@/vendors/flaticon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";

// extra css
import "@/styles/default.css";
import "@/styles/style.css";
import { apiUrl } from "src/_helpers";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = apiUrl;

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </Provider>
  );
};

export default MyApp;
