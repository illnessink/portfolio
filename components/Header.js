import Link  from 'next/link';

function Header() {
    return (
        <header>
            <div className="container">
            <h1>
                <Link href="/">Vanessa Foerster</Link>
            </h1>
            <nav className="flex-container">
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: dodgerblue;
                    height: 3.125rem;
                    color: white;
                }
                .flex-container {
                    display: flex;
                    align-items: center;
                }
                ul {
                    display: flex;
                    align-items: center;
                    list-style: none;
                }
                li {
                    margin-left: 1rem;
                }
            `}</style>
            </div>
        </header>
    );
}

export default Header;