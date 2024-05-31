'use client'
import React, { useEffect, useState } from 'react';
import TopBanner from '../components/Common/Banner/TopBanner';
import ProductCategory from '../components/ProductRange/ProductCategory';
import ProductListcategory from '../components/ProductRange/ProductListcategory';
import { ProductPageHeaderData, ProductPageTypes, ProductPageContent } from '../Api/Api';

interface Product {
  attributes: {
    product_type: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
  };
}

interface ProductPageData {
  data: any;
}

const ProductRange = () => {
  const [productPageHeaderData, setProductPageHeaderData] = useState<any>(null);
  const [productPageTypes, setProductPageTypes] = useState<any>(null);
  const [productPageContent, setProductPageContent] = useState<any>(null);
  const [selectedProductType, setSelectedProductType] = useState<string | null>(null);
  const [filteredProductPageContent, setFilteredProductPageContent] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const [headerData, typesData, contentData] = await Promise.all([
          ProductPageHeaderData(),
          ProductPageTypes(),
          ProductPageContent()
        ]);
        setProductPageHeaderData(headerData.data);
        setProductPageTypes(typesData.data);
        setProductPageContent(contentData.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  const bannerImage = productPageHeaderData?.attributes?.Header?.cover?.data?.attributes?.formats?.large?.url;

  const handleProductTypeClick = (productType: string) => {
    setSelectedProductType(productType);
    const filteredContent = productPageContent?.filter((product: Product) => product.attributes.product_type.data.attributes.name === productType);
    setFilteredProductPageContent(filteredContent);
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <TopBanner bannerImage={bannerImage} />
      <div className='w-full max-w-[1280px] mx-auto relative flex flex-col md:flex-row gap-8 py-16'>
        <ProductCategory
          productPageTypes={productPageTypes}
          productPageContent={productPageContent}
          onProductTypeClick={handleProductTypeClick}
        />
        <ProductListcategory
          productPageHeaderData={productPageHeaderData}
          productPageContent={selectedProductType ? filteredProductPageContent : productPageContent}
        />
      </div>
    </main>
  );
}

export default ProductRange;
