import React, { useState } from 'react';

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

  const handleProductTypeClick = (productType: string) => {
    if (productType === "All") {
      setSelectedProductType("All");
      onProductTypeClick("");
    } else {
      setSelectedProductType(productType);
      onProductTypeClick(productType);
    }
  };

  return (
    <div className="product-categories relative w-[95%] mx-auto md:w-[25%]">
      <div className='relative flex flex-col gap-8 h-full'>
        <h2 className='text-2xl font-bold px-8'>Products Type</h2>
        <ul className='flex flex-col gap-8 border-r-2 h-full px-8'>
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
