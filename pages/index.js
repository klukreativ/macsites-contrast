import 'bootstrap/dist/css/bootstrap.css';

import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import Body from '../components/body.js';
import Footer from '../components/footer.js';

export default function Home() {
    const title = "MacSites Contrast Checker";
    const subtitle = "By Media Production Services";

    return (
        <>
            <Header title={title} subtitle={subtitle} />
            <Navbar />
            <Body />
            <Footer title={title} subtitle={subtitle} />
        </>
    )
}