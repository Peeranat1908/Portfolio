import Navbar from "./component/navbar";
import Main from "./component/main";
import About from "./component/about";
export default function Home() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Main/>
            </div>
            <div>
                <About/>
            </div>
        </div>
    );
}