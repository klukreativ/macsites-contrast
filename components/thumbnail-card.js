export default function ThumbnailCard({ title = "Sample Title", content = "this is a bunch of text" }) {
    return (
        <div className="col-lg-4">
            <div className="card card-shadow border-top-0">
                <div className="card-main border-top h-100">
                    <div className="card border-0 no-shadow card-hover">
                        {/* render image*/}
                        {/* render content */}
                        <div className="card-body pb-0">
                            <h3 className="card-title">{title}</h3>
                            <div className="card-text mb-0">
                                <p>{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}