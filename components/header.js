export default function Header({ title = "MacSites Contrast Checker", subtitle = "By Media Production Services" }) {
    return (
        <header id="mcmaster-header">
            <div className="header__inner">
                <div id="mcmaster-header__title">
                    <h1 className="mcmaster-header__header-title mb-0">{title}</h1>
                    <h2 className="mcmaster-header__department"><a href="https://mps.mcmaster.ca">{subtitle}</a></h2>
                </div>
            </div>
        </header>
    )
}