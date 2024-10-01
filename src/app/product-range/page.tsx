'use client';
import React, { useEffect, useState } from 'react';
import TopBanner from '../components/Common/Banner/TopBanner';
import ProductCategory from '../components/ProductRange/ProductCategory';
import ProductListcategory from '../components/ProductRange/ProductListcategory';
import { ProductPageHeaderData, ProductPageTypes, ProductPageContent } from '../Api/Api';

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

interface ProductPageData {
  data: Product[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const ProductRange = () => {
  const [productPageHeaderData, setProductPageHeaderData] = useState<any>(null);
  const [productPageTypes, setProductPageTypes] = useState<any>(null);
  const [productPageContent, setProductPageContent] = useState<Product[]>([]);
  const [selectedProductType, setSelectedProductType] = useState<string | null>(null);
  const [filteredProductPageContent, setFilteredProductPageContent] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const [headerData, typesData] = await Promise.all([
          ProductPageHeaderData(),
          ProductPageTypes()
        ]);

        // Fetch all pages of product content
        const contentData = await fetchAllProductContent();

        setProductPageHeaderData(headerData.data);
        setProductPageTypes(typesData.data);
        setProductPageContent(contentData);
      } catch (error) {
        setError('Failed to fetch data');
      }
    };

    fetchDataFromApi();
  }, []);

  const fetchAllProductContent = async () => {
    let allContent: Product[] = [];
    let page = 1;
    let pageCount = 1;

    while (page <= pageCount) {
      const response: ProductPageData = await ProductPageContent(page);
      allContent = allContent.concat(response.data);
      pageCount = response.meta.pagination.pageCount;
      page++;
    }

    return allContent;
  };

  const bannerImage = productPageHeaderData?.attributes?.Header?.cover?.data?.attributes?.formats?.large?.url;

  const handleProductTypeClick = (productType: string) => {
    setSelectedProductType(productType);
    const filteredContent = productPageContent.filter((product: Product) =>
      product.attributes.product_type.data.attributes.name === productType
    );
    setFilteredProductPageContent(filteredContent);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Calculate total items for pagination
  const totalItems = selectedProductType ? filteredProductPageContent.length : productPageContent.length;

  console.log(totalItems)

  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <TopBanner bannerImage={bannerImage} />
      <div className='w-full max-w-[1280px] mx-auto relative flex flex-col md:flex-row gap-8 md:py-16 py-8'>
        <ProductCategory
          productPageTypes={productPageTypes}
          productPageContent={productPageContent}
          onProductTypeClick={handleProductTypeClick}
        />
        <ProductListcategory
          productPageHeaderData={productPageHeaderData}
          productPageContent={selectedProductType ? filteredProductPageContent : productPageContent}
          totalItems={totalItems} // Pass total items for pagination
        />
      </div>
    </main>
  );
}

export default ProductRange;
