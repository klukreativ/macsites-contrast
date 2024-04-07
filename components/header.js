import { useColourContext } from '../context/ColourContext';

export default function Header({ title = "MacSites Contrast Checker", subtitle = "By Media Production Services" }) {
    const {primaryColour} = useColourContext(); 

    return (
        <header id="mcmaster-header">
            <div className="header__inner d-flex px-5">
                <a href="//www.mcmaster.ca" id="mcmaster-brand" className="nav-item col-lg-3" style={{ float: "left", display: "block", zIndex: 1000, position: "relative", paddingTop: "8px", margin: "0 auto"}}>
                    <img src="https://macsites.mcmaster.ca/app/themes/macsites-theme/img/logo.svg" style={{ width: "180px", height: "80px", margin: "0 20px 0 -20px" }} />
                </a>
                <div id="mcmaster-header__title" className="col-lg-6">
                    <h1 className="mcmaster-header__header-title mb-0">{title}</h1>
                    <h2 className="mcmaster-header__department"><a href="https://mps.mcmaster.ca" style={{color: primaryColour}}>{subtitle}</a></h2>
                </div>
                <div className="col-lg-3"/>
            </div>
        </header>
    )
}