import './card.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/reducer';

const Card = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div className='card'>
            <Link to={`/product/${product.id}`} style={{
                color: 'black',
                textDecoration: 'none',
            }}>
                <img src={product.image} alt="" className="card-img" />

                <h4 className="card-title">{
                    product.title.length > 30
                        ? product.title.substr(0, 27).trim() + '...'
                        : product.title
                }</h4>
                <p className='card-description'>{
                    product.description.length > 30
                        ? product.description.substr(0, 27).trim() + '...'
                        : product.description
                }</p>
            </Link>
            <div className="card-block">
                <p className="card-price">${product.price}</p>

                <button className="card-btn" onClick={() => {
                    dispatch(addCart(product))
                }}>buy</button>
            </div>

        </div>
    );
}

export default Card;
