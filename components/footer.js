import { useColourContext } from '../context/ColourContext';

export default function Footer({ title, subtitle }) {
    const { primaryColour } = useColourContext();

    return (
        <footer id="site-footer" className="grey pt-4 pb-2" style={{ backgroundColor: primaryColour }}>
            <div className="container">
                <div className="row row-eq-height">
                    <div className="col-xl-3 col-lg-12 text-center text-xl-end">
                        <h2 id="site-name" className="mr-xl-3 d-flex flex-column">
                            <a href="/" className="tier2 order-2">{subtitle}</a>
                            <a href="/" className="tier1 order-1">{title}</a>
                        </h2>
                    </div>
                    <div className="col-xl-9 col-lg-12 text-center text-xl-right">
                        <div className="row row-eq-height">
                            <div className="col-md-4 flex-fill text-center text-xl-start mx-auto mb-2 mb-xl-0">
                            </div>
                            <div className="col-md-4 flex-fill text-center text-xl-start mx-auto mb-2 mb-xl-0">
                            </div>
                            <div className="col-md-4 flex-fill text-center text-xl-start mx-auto mb-2 mb-xl-0 footer-text">
                                <p>Media Production Services<br />Mills Library L118<br />1280 Main Street West<br />Hamilton, Ontario L8S 4L8</p><p><a href='mailto:mpsweb@mcmaster.ca'>mpsweb@mcmaster.ca</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}