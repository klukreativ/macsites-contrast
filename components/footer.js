export default function Footer({ title = "MacSites Contrast Checker" }) {
    return (
        <footer id="site-footer" className="grey pt-4 pb-2">
            <div className="container">
                <div class="row row-eq-height">
                    <div className="col-xl-3 col-lg-12 text-center ">
                        <div className="col-12">
                            <h3>{title}</h3>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-12 text-center text-xl-right">
                        <div className="row row-eq-height">
                            <div className="col-md-4 col-lg-auto flex-fill text-center text-xl-left mx-auto mb-2 mb-xl-0">
                                <h3>Address Information</h3>
                                <p>You can edit your footer within the ‘header and footer’ menu settings.</p>
                            </div>
                            <div className="col-md-4 colg-lg-auto flex-fill text-center text-xl-left mx-auto mb-2 mb-xl-0">
                                <h3>Contact Information</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}