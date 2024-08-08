import Link from 'next/link';
import React, { useState } from 'react';

interface ProductCategoryProps {
  productPageHeaderData?: {
    attributes?: {
      Body?: {
        title?: string;
        content?: string;
      };
    };
  };
  productPageContent?: {
    id: string;
    attributes: {
      media: {
        data: {
          attributes: {
            formats: {
              medium: {
                url: string;
              };
              large: {
                url: string
              }
            };
          };
        };
      };
      name: string;
    };
  }[];
}

const ProductListcategory: React.FC<ProductCategoryProps> = ({ productPageHeaderData, productPageContent }) => {
  const ProductHeading = productPageHeaderData?.attributes?.Body;
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const openModal = (productId: string) => {
    setSelectedProduct(productId);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (!productPageHeaderData || !productPageContent) {
    return <div>Error: Product data not available</div>;
  }

  return (
    <div className="product-list-category relative flex flex-col w-[95%] mx-auto md:w-[75%]">
      <div className='breadcrumbs relative flex items-center gap-4 mb-4'>
        <Link className='capitalize text-gray-400 font-medium' href='/' passHref>
          Homepage
        </Link>
        <span> / </span>
        <Link className='capitalize text-black font-medium' href='/product-range' passHref>
          Product Range
        </Link>
      </div>
      <div className='product-heading relative w-full flex flex-col gap-4 mb-8'>
        <h1 className='text-6xl font-bold'>{ProductHeading?.title}</h1>
        <p className='text-lg font-medium'>{ProductHeading?.content}</p>
      </div>
      <div className='product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
        {productPageContent.map((product) => (
          <div key={product.id} className="product-item bg-[#F0F0F9] p-4 rounded-xl" onClick={() => openModal(product.id)}>
            <img
              src={product.attributes.media.data.attributes.formats.medium.url}
              alt={product.attributes.name}
              className="w-full h-[200px] rounded-xl bg-white mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold mb-2">{product.attributes.name}</h3>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="modal bg-white rounded-xl w-[80%] h-[80%] relative p-2">
          <span className="absolute top-4 right-4 cursor-pointer text-4xl" onClick={closeModal}>&times;</span>
          <img src={productPageContent.find(product => product.id === selectedProduct)?.attributes.media.data.attributes.formats.large.url} alt="Large Product" className="w-full h-full rounded-xl" />
        </div>
      </div>
      )}
    </div>
  );
}

export default ProductListcategory;
