import React, { useState } from 'react';

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
  totalItems: number; // Add totalItems prop
}

const ProductListcategory: React.FC<ProductCategoryProps> = ({
  productPageHeaderData,
  productPageContent,
  totalItems,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust items per page as needed

  if (!productPageHeaderData || !productPageHeaderData.attributes || !productPageContent) {
    return null;
  }

  const { title, content } = productPageHeaderData.attributes.Body || {};

  const openModal = (productId: string) => setSelectedProduct(productId);
  const closeModal = () => setSelectedProduct(null);

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current products
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = productPageContent.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Function to render pagination buttons
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 5; // Maximum buttons to show

    let start = Math.max(2, currentPage - Math.floor(maxButtons / 2));
    let end = Math.min(totalPages - 1, start + maxButtons - 2);

    if (end - start < maxButtons - 2) {
      start = Math.max(2, end - (maxButtons - 2));
    }

    if (start > 2) {
      buttons.push(
        <button key={1} onClick={() => handlePageChange(1)} className="pagination-button">
          1
        </button>
      );
      if (start > 2) {
        buttons.push(<span key="ellipsis-start" className="mx-1">...</span>);
      }
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-button ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
        >
          {i}
        </button>
      );
    }

    if (end < totalPages - 1) {
      buttons.push(<span key="ellipsis-end" className="mx-1">...</span>);
      buttons.push(
        <button key={totalPages} onClick={() => handlePageChange(totalPages)} className="pagination-button">
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="product-list-category relative flex flex-col w-[95%] mx-auto md:w-[75%]">
      <div className='product-heading relative w-full flex flex-col gap-4 mb-8'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='text-lg font-medium'>{content}</p>
      </div>

      <div className='product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="product-item bg-[#F0F0F9] dark:bg-black dark:border-[1px] dark:border-gray-700 p-4 rounded-xl cursor-pointer"
            onClick={() => openModal(product.id)}
          >
            <img
              src={product.attributes.media.data.attributes.url}
              alt={product.attributes.name}
              className="w-full h-[200px] rounded-xl mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold mb-2">{product.attributes.name}</h3>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination flex justify-center gap-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-md bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition"
        >
          Previous
        </button>
        {renderPaginationButtons()}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-md bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition"
        >
          Next
        </button>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="modal bg-white dark:bg-black dark:border-[1px] dark:border-gray-700 rounded-xl w-[80%] h-[80%] relative p-2">
            <span className="absolute top-4 right-4 cursor-pointer dark:text-black text-4xl" onClick={closeModal}>&times;</span>
            <img
              src={productPageContent.find(product => product.id === selectedProduct)?.attributes?.media?.data?.attributes?.url}
              alt="Large Product"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListcategory;
