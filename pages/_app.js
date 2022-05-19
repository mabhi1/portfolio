import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-slate-50 dark:bg-slate-900">
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
