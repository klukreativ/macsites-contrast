import 'bootstrap/dist/css/bootstrap.css';

import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import Body from '../components/body.js';
import Footer from '../components/footer.js';

let title;
let subtitle;

export default function Home() {
    return (
        <>
            <Header title={title} subtitle={subtitle} />
            <Navbar />
            <Body />
            <Footer title={title}/>
        </>
    )
}