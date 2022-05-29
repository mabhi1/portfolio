import "../styles/globals.css";
import Navbar from "../components/Navbar";
import smoothscroll from "smoothscroll-polyfill";

function MyApp({ Component, pageProps }) {
    // kick off the polyfill!
    smoothscroll.polyfill();
    return (
        <div className="bg-slate-50 dark:bg-slate-900">
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
