'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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
  selectedCategory: string | null; // Add selectedCategory prop
}

const ProductListcategory: React.FC<ProductCategoryProps> = ({ productData, selectedCategory }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (event.target === document.querySelector(".modal-bg")) {
                closeModal();
            }
        };

        if (selectedProduct) {
            document.addEventListener("click", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [selectedProduct]);
    return (
        <div className="relative flex flex-col w-[95%] mx-auto md:w-[75%]">
            <div className='relative flex items-center gap-4 mb-4'>
                <Link
                    href='/'
                    className='relative capitalize text-gray-400 font-medium'
                >
                    Homepage
                </Link>
                <span> / </span>
                <Link
                    href='/product-range'
                    className='relative capitalize text-black font-medium'
                >
                    Product Range
                </Link>
            </div>
            <div className='relative w-full flex flex-col gap-4 mb-8'>
                <h1 className='text-6xl font-bold'>Product Range</h1>
                <p className='text-lg font-medium'>
                    With eight subsidiary units the company cumulatively possesses extensive capacity and facility for manufacturing and packing. 
                </p>
            </div>
            {selectedCategory !== "All" && selectedCategory ? <h2 className='text-2xl border-b-2 pb-4 mb-4 font-bold'>{selectedCategory}</h2> : <h2 className='text-2xl border-b-2 pb-4 mb-4 font-bold'>All</h2>}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
                {productData.map(product => (
                    <div key={product.id} className="bg-[#F0F0F9] p-4 rounded-xl">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-[200px] rounded-xl bg-red-500 mb-4 object-cover"
                            onClick={() => openModal(product)}
                        />
                        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                        <p className="text-gray-600 mb-2">{product.description}</p>
                        <p className="text-gray-800 font-bold">${product.price}</p>
                        <p className="text-sm text-gray-600">Rating: {product.rating}</p>
                    </div>
                ))}
            </div>
            {/* Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 modal-bg">
                    <div className="bg-white p-8 rounded-lg max-w-6xl relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={closeModal} // Close modal on button click
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={selectedProduct.thumbnail}
                            alt={selectedProduct.title}
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductListcategory;
