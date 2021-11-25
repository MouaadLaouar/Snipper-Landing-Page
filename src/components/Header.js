import logo from '../Assets/Logo.svg';
import SearchIcon from '../Assets/Search Icon.svg';
import '../Style/css/Header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="navbar">
                <div className="logo">
                    <img src={ logo } alt="#"/>
                </div>
                <div className="menu">
                    <img src={ SearchIcon } alt="#"/>
                    <ul>
                        <li>sign in</li>
                        <li className="get-started">Get started--it's free</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
