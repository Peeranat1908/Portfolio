export default function Navbar() {
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <button>
                    <img src="/img/Code Logo.png" alt="" className="w-32"/>
                </button>

            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>About</a></li>
                    <li><a>Work</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}