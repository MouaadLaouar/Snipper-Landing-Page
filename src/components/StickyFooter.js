import '../Style/css/StickyFooter.css';
import img from '../Assets/Customizable Image.png';

export default function StickyFooter() {
    return (
        <div className="StickyFooter">
            <section>
                <h1>A fully customizable code snippet editor</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus maiores iusto suscipit voluptatibus, voluptatem quia culpa beatae explicabo odio ipsum sequi reiciendis voluptatum architecto illum, aliquam ab, cumque in!</p>
                <button>Get started--it's free</button>
            </section>
            <img src={ img } alt="#" />
        </div>
    )
}
