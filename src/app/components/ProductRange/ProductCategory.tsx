import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

interface ProductType {
  id: string;
  attributes: {
    name: string;
  };
}

interface ProductCategoryProps {
  productPageTypes: ProductType[] | null;
  productPageContent: any;
}

const ProductCategory: React.FC<ProductCategoryProps & { onProductTypeClick: (productType: string) => void }> = ({
  productPageTypes,
  productPageContent,
  onProductTypeClick,
}) => {
  const productTypeCount: { [key: string]: number } = {};
  
  if (productPageContent) {
    productPageContent.forEach((product: { attributes: { product_type: { data: { attributes: { name: string }; } }; }; }) => {
      const productTypeName = product?.attributes?.product_type?.data?.attributes?.name;
      if (productTypeName) {
        productTypeCount[productTypeName] = (productTypeCount[productTypeName] || 0) + 1;
      }
    });

    const allProductCount = productPageContent.length;
    productTypeCount["All"] = allProductCount;
  }

  const productTypesWithAll = productPageTypes
    ? [{ id: "all", attributes: { name: "All" } }, ...productPageTypes]
    : [];

  const [selectedProductType, setSelectedProductType] = useState<string>("All");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleProductTypeClick = (productType: string) => {
    setSelectedProductType(productType);
    onProductTypeClick(productType === "All" ? "" : productType);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-[95%] mx-auto md:w-[25%] border-r-[1px] border-solid border-gray-300 dark:border-r-[1px] dark:border-gray-700">
      <div className="md:hidden flex items-center justify-between py-4 md:px-8 px-4">
        <h2 className='text-2xl font-bold'>Products Type</h2>
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <div className={`relative flex flex-col gap-8 h-full md:h-auto px-8 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className='flex flex-col gap-8'>
          {productTypesWithAll.map((productType) => (
            <li
              key={productType.id}
              className={`text-md font-medium cursor-pointer   flex justify-between ${selectedProductType === productType.attributes.name ? 'text-[#0059DF]' : ''}`} 
              onClick={() => handleProductTypeClick(productType.attributes.name)}
            >
              {productType.attributes.name} <span className={`text-md font-normal cursor-pointer   ${selectedProductType === productType.attributes.name ? 'text-[#0059DF]' : 'text-gray-400'}`}>({productTypeCount[productType.attributes.name] || 0})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCategory;
