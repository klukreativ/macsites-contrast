import '../styles/global.css';
import { ColourProvider } from '../context/ColourContext';

export default function App({ Component, pageProps }) {
    return (
        <ColourProvider>
            <Component {...pageProps} />
        </ColourProvider>
    )
}