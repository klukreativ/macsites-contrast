export default function Header({ title = "MacSites Contrast Checker", subtitle = "By Media Production Services" }) {
    return (
        <header>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </header>
    )
}