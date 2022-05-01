import './category-item.styles.sass';

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className='category'>
      <div
        className='category__image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category__info'>
        <h2 className='category__title'>{title}</h2>
        <p className='category__text'>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
