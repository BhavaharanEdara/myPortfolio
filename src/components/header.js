export default function Header(){
    return(<nav className="header" id="navBar">
        <div className="logo">
            Haran.dev
        </div>
        <ul className = "headerOptions">
            <li className="opt">Home</li>
            <li className="opt">About</li>
            <li className="opt">Projects</li>
            <li className="opt">Contact</li>
        </ul>
    </nav>)
}