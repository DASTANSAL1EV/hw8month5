import { Link } from "react-router-dom";
import './header.scss';
import { useSelector } from "react-redux";

const Header = () => {
    const categories = useSelector(s => s.reducer.categories) || [];

    const cartCount = useSelector((s) => {
        const count = (s.reducer.cart || []).reduce((total, item) => total + (item.quantity || 1), 0);
        return count > 9 ? "9+" : count;
    });

    return (
        <header className="header">
            <div className="container header-container">
                <h2 className="header-logo"><Link to={'/'}>shop</Link></h2>

                <nav className="header-nav">
                    <Link to={'/'}>home</Link>
                    {
                        categories.map(item => (
                            <Link to={`/category/${item}`} key={item}>{item}</Link>
                        ))
                    }
                    <Link to={'/cart'}>
                        cart <span className="cart-indicator">{cartCount}</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
