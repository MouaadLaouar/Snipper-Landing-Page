import code from '../Assets/Snippet Image.png';
import '../Style/css/Content.css';

export default function Content() {
    return (
        <div className="Content">
            <h1>Gorgeous Code Snippets</h1>
            <p>With Snipper, create fully customaziable code snippet in a matter of seconds right from yout browser</p>
            <button>Get started--it's free</button>
            <p>No credit card required.</p>
            <img src={ code } alt="#" />
        </div>
    )
}
