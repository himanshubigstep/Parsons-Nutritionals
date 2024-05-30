import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductCategoryProps {
  productData: Product[];
  onCategorySelect: (category: string) => void;
  selectedCategory: string | null;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ productData, onCategorySelect, selectedCategory }) => {
  const categoryCount: { [key: string]: number } = {};

  // Calculate the count of items in each category
  productData.forEach(product => {
    if (categoryCount[product.category]) {
      categoryCount[product.category]++;
    } else {
      categoryCount[product.category] = 1;
    }
  });

  // Calculate total count of all products
  const totalCount = productData.length;

  // Get unique categories
  const categories = Object.keys(categoryCount);

  return (
    <div className="product-categories relative w-[95%] mx-auto md:w-[25%]">
      {categories.length > 0 && (
        <div className='relative flex flex-col gap-8 h-full'>
          <h2 className='text-2xl font-bold px-8'>Products Type</h2>
          <ul className='flex flex-col gap-8 border-r-2 h-full px-8'>
            <li className={`${selectedCategory === null ? 'text-[#0059df]' : ''} flex justify-between items-center font-medium text-lg`} key="all" onClick={() => onCategorySelect("All")}><span>All</span><span className={`${selectedCategory === null ? 'text-[#0059df]' : 'text-gray-500'} flex justify-between items-center font-medium text-lg cursor-pointer`}>({totalCount})</span></li> {/* Render "All" category with totalCount */}
            {categories.map(category => (
              <li className={`${selectedCategory === category ? 'text-[#0059df]' : ''} flex cursor-pointer justify-between items-center font-medium text-lg`} key={category} onClick={() => onCategorySelect(category)}>
                <span>
                    {category}
                </span>
                <span className={`${selectedCategory === category ? 'text-[#0059df]' : 'text-gray-500'}`}>
                    ({categoryCount[category]})
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductCategory;
