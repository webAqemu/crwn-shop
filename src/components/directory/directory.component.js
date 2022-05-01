import CategoryItem from '../category-item';
import './directory.styles.sass';

const Directory = ({ categories }) => (
  <div className='categories'>
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default Directory;
