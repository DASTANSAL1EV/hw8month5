import axios from "axios";
import Card from '../Card/Card';
import { useState, useEffect } from "react";
import './categorycomponent.scss'
import { useDispatch, useSelector } from "react-redux";
import { proloaderCart } from "../../redux/reducer";

const CategoryComponent = ({ limit = null, category }) => {
    const [data, setData] = useState([]);
    const loader = useSelector(s => s.reducer.loader);
    const dispatch = useDispatch();


    useEffect(() => {
        setData([]);
        dispatch(proloaderCart(true))
        axios(
            limit
                ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
                : `https://fakestoreapi.com/products/category/${category}`
        )
            .then(({ data }) => {
                setData(data);
                dispatch(proloaderCart(false))

            })
    }, [category, limit])

    if(loader){
        return <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>   
    }
    return (
        <div className="container">
            <br />
            <h2>{category}</h2>
            <br />
            <div className="row">
                {
                    data.map(item => {
                        return <div key={item.id} className="col-3">
                            <Card product={item} />
                        </div>
                    })
                }
            </div>
            <br />
        </div>
    );
}

export default CategoryComponent;
