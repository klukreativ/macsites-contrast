import Link from './link';
import { useColourContext } from '../context/ColourContext';

export default function Navbar() {
    const links = [{ title: "Home", url: "" }, { title: "About", url: "" }, { title: "Contact", url: "" }];
    const { primaryColour } = useColourContext();

    return (
        <nav id="site-navbar" className="navbar navbar-expand-lg navbar-dark navbar-site" style={{backgroundColor: primaryColour}}>
            <div className="container">
                <div id="siteMenu" className="collapse navbar-collapse">
                    <ul id="navbar-nav" className="navbar-nav mr-auto">
                        {links.map((link) => <Link key={link.title} title={link.title} />)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}