export function Header({ isTransparent = true }) {
    return (
        <header className={isTransparent ? 'absolute' : 'relative'}>
            <Navigation />
        </header>
    );
}

export function Footer() {
    return (
        <footer>
            <ContactInfo />
            <SocialLinks />
        </footer>
    );
}