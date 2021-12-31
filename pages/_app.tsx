import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DappProvider } from "../contexts/DappContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  var { route } = useRouter();
  if (route != "/") {
    return (
      <DappProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
        />
        {/* Same as */}
        <ToastContainer />
        <Component {...pageProps} />
      </DappProvider>
    );
  } else return <Component {...pageProps} />;
}

export default MyApp;
