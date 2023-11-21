export default function Navbar() {
    return (
        <nav id="site-navbar" className="navbar navbar-expand-lg navbar-dark navbar-site">
            <div className="container">
                <div id="siteMenu" className="collapse navbar-collapse">
                    <ul id="navbar-nav" className="navbar-nav mr-auto">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1940 nav-item"><a className="nav-link">Home</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1940 nav-item"><a className="nav-link">About</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1940 nav-item"><a className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}