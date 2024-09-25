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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const openModal = (productId: string) => {
    setSelectedProduct(productId);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (!productPageHeaderData || !productPageContent) {
    return <div>Error: Product data not available</div>;
  }

  const totalProducts = productPageContent.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = productPageContent.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="product-list-category relative flex flex-col w-[95%] mx-auto md:w-[75%]">
      <div className='breadcrumbs relative flex items-center gap-4 mb-4'>
        <Link className='capitalize text-gray-400 font-medium' href='/' passHref>
          Homepage
        </Link>
        <span> / </span>
        <Link className='capitalize text-black dark:text-white font-medium' href='/product-range' passHref>
          Product Range
        </Link>
      </div>
      <div className='product-heading relative w-full flex flex-col gap-4 mb-8'>
        <h1 className='text-6xl font-bold'>{ProductHeading?.title}</h1>
        <p className='text-lg font-medium'>{ProductHeading?.content}</p>
      </div>
      <div className='product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
        {currentProducts.map((product) => (
          <div key={product.id} className="product-item bg-[#F0F0F9] dark:bg-black dark:border-[1px] dark:border-gray-700 p-4 rounded-xl" onClick={() => openModal(product.id)}>
            <img
              src={product.attributes.media.data.attributes.formats.medium.url}
              alt={product.attributes.name}
              className="w-full h-[200px] rounded-xl bg-white dark:bg-black mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold mb-2">{product.attributes.name}</h3>
          </div>
        ))}
      </div>
      <div className="pagination flex justify-between items-center gap-4 mt-8">
        <button
          className={`px-4 py-2 border rounded ${currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'text-blue-600'}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-4 py-2 border rounded ${currentPage === totalPages ? 'cursor-not-allowed text-gray-400' : 'text-blue-600'}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="modal bg-white dark:bg-black dark:border-[1px] dark:border-gray-700 rounded-xl w-[80%] h-[80%] relative p-2">
            <span className="absolute top-4 right-4 cursor-pointer dark:text-black text-4xl" onClick={closeModal}>&times;</span>
            <img src={productPageContent.find(product => product.id === selectedProduct)?.attributes.media.data.attributes.formats.large.url} alt="Large Product" className="w-full h-full rounded-xl" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductListcategory;
