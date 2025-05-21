import About from "./about"
export default function Navbar() {
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <button>
                    <a href="/home"></a>
                    <img src="/img/Code Logo.png" alt="" className="w-32"/>
                </button>

            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="">Project</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="/cv-peeranat.pdf" target="_blank" rel="noopener noreferrer">Resume / CV</a></li>
                </ul>
            </div>
        </div>
    );
}
