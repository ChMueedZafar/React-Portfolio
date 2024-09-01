import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <div className="navbar">
            <h1 className="logo">Mueedzafar</h1>
        <div className="listItems">
            <link className="list">Home</link>
            <link className="list">About</link>
            <link className="list">Skills</link>
            <link className="list">Project</link>
        </div>
        <div className="btnNav">
            <button>Contact Me</button>
        </div>

        </div>

    );
}
