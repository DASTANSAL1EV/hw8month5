import {useParams} from 'react-router-dom';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';
import './category.scss'

const CategoryPage = () => {
    const params = useParams();
    return (
        <div>
            <CategoryComponent category={params.category} />
        </div>
    );
}

export default CategoryPage;
