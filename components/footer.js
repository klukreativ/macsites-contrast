export default function Footer({title = "MacSites Contrast Checker"}) {
    return (
        <footer>
            <div class="row">
                <ul>
                    <li>{title}</li>
                    <li>Address & Contact</li>
                    <li>Accessibility</li>
                </ul>
            </div>
        </footer>
    )
}