'use client';
import React, { useEffect, useState } from 'react';

interface ProductMedia {
  data: {
    attributes: {
      url: string;
      formats: {
        large: {
          url: string;
        };
      };
    };
  };
}

interface ProductAttributes {
  media: ProductMedia;
  name: string;
  product_type: {
    data: {
      attributes: {
        name: string;
      };
    };
  };
}

interface Product {
  id: string;
  attributes: ProductAttributes;
}

interface ProductCategoryProps {
  productPageHeaderData?: {
    attributes?: {
      Body?: {
        title?: string;
        content?: string;
      };
    };
  };
  productPageContent?: Product[];
  totalItems: number;
}

const ProductListcategory: React.FC<ProductCategoryProps> = ({
  productPageHeaderData,
  productPageContent,
  totalItems,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Reset to the first page if the product content or total items change
  useEffect(() => {
    setCurrentPage(1);
  }, [productPageContent]);

  if (!productPageHeaderData || !productPageHeaderData.attributes || !productPageContent) {
    return null;
  }

  const { title, content } = productPageHeaderData.attributes.Body || {};

  const openModal = (productId: string) => setSelectedProduct(productId);
  const closeModal = () => setSelectedProduct(null);
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = productPageContent.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="product-list-category relative flex flex-col w-[95%] mx-auto md:w-[75%]">
      <div className='product-heading relative w-full flex flex-col gap-4 mb-8'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-md font-medium'>{content}</p>
      </div>

      <div className='product-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8'>
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="product-item bg-[#F0F0F9] dark:bg-black dark:border-[1px] dark:border-gray-700 p-4 rounded-xl cursor-pointer"
            onClick={() => openModal(product.id)}
          >
            <img
              src={imageBaseUrl + product.attributes.media.data.attributes.url}
              alt={product.attributes.name}
              className="w-full md:h-[200px] h-[80px] rounded-xl mb-4 object-contain"
            />
            <h3 className="text-md font-semibold mb-2">{product.attributes.name}</h3>
          </div>
        ))}
      </div>

      {/* Conditional Pagination Controls */}
      {totalItems > itemsPerPage && (
        <div className="pagination flex flex-wrap justify-center gap-4 mt-16">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg transition duration-200 ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg transition duration-200 ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg transition duration-200 ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Next
          </button>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="modal bg-white dark:bg-black dark:border-[1px] dark:border-gray-700 rounded-xl w-auto h-[80%] relative p-2">
            <span className="absolute top-4 right-4 cursor-pointer dark:text-black text-4xl" onClick={closeModal}>&times;</span>
            <img
              src={`${imageBaseUrl}${productPageContent?.find(product => product.id === selectedProduct)?.attributes?.media?.data?.attributes?.url || ''}`}
              alt="Large Product"
              className="w-full h-full rounded-xl object-contain p-4"
            />

          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListcategory;
