import Link from './link';

export default function Navbar() {
    const links = [{ title: "Home", url: "" }, { title: "About", url: "" }, { title: "Contact", url: "" }];

    return (
        <nav id="site-navbar" className="navbar navbar-expand-lg navbar-dark navbar-site">
            <div className="container">
                <div id="siteMenu" className="collapse navbar-collapse">
                    <ul id="navbar-nav" className="navbar-nav mr-auto">
                        {links.map((link) => <Link title={link.title} />)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}