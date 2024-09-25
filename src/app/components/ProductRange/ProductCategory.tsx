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

const ProductCategory: React.FC<ProductCategoryProps & { onProductTypeClick: (productType: string) => void }> = ({ productPageTypes, productPageContent, onProductTypeClick }) => {
  const productTypeCount: { [key: string]: number } = {};

  if (productPageContent) {
    productPageContent.forEach((product: { attributes: { product_type: { data: { attributes: { name: any; }; }; }; }; }) => {
      const productTypeName = product.attributes.product_type.data.attributes.name;
      productTypeCount[productTypeName] = (productTypeCount[productTypeName] || 0) + 1;
    });
  }

  const allProductCount = productPageContent ? productPageContent.length : 0;
  productTypeCount["All"] = allProductCount;

  const productTypesWithAll = productPageTypes ? [{ id: "all", attributes: { name: "All" } }, ...productPageTypes] : [];

  const [selectedProductType, setSelectedProductType] = useState<string>("All");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State for menu visibility

  const handleProductTypeClick = (productType: string) => {
    if (productType === "All") {
      setSelectedProductType("All");
      onProductTypeClick("");
    } else {
      setSelectedProductType(productType);
      onProductTypeClick(productType);
    }
    setIsMenuOpen(false); // Close menu after selection on mobile
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-[95%] mx-auto md:w-[25%] dark:border-r-[1px] dark:border-gray-700">
      {/* Hamburger Menu Button */}
      <div className="md:hidden flex items-center justify-between py-4 md:px-8 px-4">
        <h2 className='text-2xl font-bold'>Products Type</h2>
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <HiX /> : <HiMenu />} {/* Toggle icon based on menu state */}
        </button>
      </div>

      {/* Category List */}
      <div className={`relative flex flex-col gap-8 h-full md:h-auto border-r-2 md:border-none px-8 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className='flex flex-col gap-8'>
          {productTypesWithAll.map((productType) => (
            <li
              key={productType.id}
              className={`text-lg font-medium cursor-pointer capitalize ${selectedProductType === productType.attributes.name ? 'text-[#0059DF]' : ''}`} // Apply styles based on selection
              onClick={() => handleProductTypeClick(productType.attributes.name)}
            >
              {productType.attributes.name} ({productTypeCount[productType.attributes.name] || 0})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCategory;
