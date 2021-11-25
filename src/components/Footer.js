import StickyFooter from "./StickyFooter";
import '../Style/css/Footer.css';
import logo from '../Assets/Logo.svg';

export default function Footer() {
    return (
        <div className="Footer">
            <StickyFooter/>
            <section>
                <img src={ logo } alt="#" />
                <div className="menu">
                    <ul>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
