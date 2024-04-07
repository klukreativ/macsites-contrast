export default function ThumbnailContent({title, content}) {
    return (
        <div className="card-body pb-0">
            <h3 className="card-title">{title}</h3>
            <div className="card-text mb-0">
                <p>{content}</p>
            </div>
        </div>
    )
}