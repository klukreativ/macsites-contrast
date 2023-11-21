import ThumbnailCard from './thumbnail-card';

export default function ThumbnailCards() {
    return (
        <section className="thumbnail-cards white my-5">
            <div className="container">
                <div className="row row-eq-height justify-content-center">
                    <ThumbnailCard />
                </div>
            </div>
        </section>
    )
}