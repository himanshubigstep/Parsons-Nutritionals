'use client'
import React, { useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it'
import './BoxSectionContainer.css'
import { EsgPageDataPdf } from '@/app/Api/Api';

const md = new MarkdownIt();

const BoxSectionContainer = ({ contactSections }: { contactSections: any }) => {
  const [esgPagepdf, setEsgPagePdf] = useState<any>(null);
  const esgPageDataContent = contactSections?.Body[0]?.content
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL

  const esgPageDataImage = imageBaseUrl + contactSections?.Body[0]?.media?.data?.attributes?.formats?.medium?.url

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await EsgPageDataPdf();
        const homePageMembersData = responseData.data.attributes;
        setEsgPagePdf(homePageMembersData);
      } catch (error) {
        console.log(error, 'api-get-error');
      }
    };

    fetchDataFromApi();
  }, []);

  console.log(esgPagepdf?.pdf?.data?.attributes?.url, 'esgPageDataContent');

  return (
    <div className="w-full max-w-[1280px] mx-auto md:py-24 pb-8 pt-8">
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="relative w-[95%] md:w-[55%] mx-auto h-full md:h-[520px] bg-white dark:bg-black dark:border-[1px] dark:border-gray-700 md:rounded-[3.75rem] rounded-lg landscape:rounded-lg flex flex-col md:py-8 md:px-8 p-12 justify-center">
        {esgPagepdf?.pdf?.data?.attributes?.url && (
          <div className='absolute md:bottom-8 bottom-4 md:right-8 right-4'>
            <a target='_blank' href={`${process.env.NEXT_PUBLIC_IMAGE_URL}${esgPagepdf?.pdf?.data?.attributes?.url}`} download className='py-2 md:px-4 px-2 rounded-md bg-blue-500 hover:bg-blue-800 text-white text-md'>
              Download PDF
            </a>
          </div>
        )}
          <div className="w-full">
            <h3 className="font-semibold text-2xl md:text-2xl mb-4">{esgPageDataContent?.title}</h3>
            <div className="font-medium   text-md mb-4 w-[95%] md:w-[85%]">
              <div
                className="font-normal   text-md list-disc mt-2 marker-list"
                dangerouslySetInnerHTML={{ __html: typeof esgPageDataContent?.content === 'string' ? md.render(esgPageDataContent.content) : '' }}
              >
              </div>
            </div>
          </div>
        </div>
        <div className="w-[95%] md:w-[45%] mx-auto md:h-[520px] md:rounded-[3.75rem] rounded-lg landscape:rounded-lg">
          <img
            className="w-full h-full object-cover md:rounded-[3.75rem] rounded-lg landscape:rounded-lg ml-0 md:ml-[-15%] mt-8 md:mt-[10%]"
            src={esgPageDataImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BoxSectionContainer;
