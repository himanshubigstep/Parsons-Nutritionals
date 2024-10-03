import React from 'react';
import MarkdownIt from 'markdown-it'
import './BoxSectionContainer.css'

const md = new MarkdownIt();

const BoxSectionContainer = ({ contactSections, pdfFileUrl }: { contactSections: any, pdfFileUrl: string }) => {
  const esgPageDataContent = contactSections?.Body[0]?.content
  const esgPageDataImage = contactSections?.Body[0]?.media?.data?.attributes?.formats?.medium?.url

  return (
    <div className="w-full max-w-[1280px] mx-auto md:py-24 pb-8 pt-24">
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="relative w-[95%] md:w-[55%] mx-auto h-full md:h-[520px] bg-white dark:bg-black dark:border-[1px] dark:border-gray-700 rounded-[3.75rem] flex flex-col py-8 px-8 justify-center">
        {pdfFileUrl && (
          <div className='absolute top-8 right-8'>
            <a target='_blank' href={pdfFileUrl} download className='py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-800 text-white text-md'>
              Download PDF
            </a>
          </div>
        )}
          <div className="w-full">
            <h3 className="font-semibold text-2xl md:text-2xl mb-4">{esgPageDataContent?.title}</h3>
            <div className="font-medium uppercase text-md mb-4 w-[95%] md:w-[85%]">
              <div
                className="font-normal capitalize text-md list-disc mt-2 marker-list"
                dangerouslySetInnerHTML={{ __html: typeof esgPageDataContent?.content === 'string' ? md.render(esgPageDataContent.content) : '' }}
              >
              </div>
            </div>
          </div>
        </div>
        <div className="w-[95%] md:w-[45%] mx-auto md:h-[520px] rounded-[3.75rem]">
          <img
            className="w-full h-full object-cover rounded-[3.75rem] ml-0 md:ml-[-15%] mt-8 md:mt-[10%]"
            src={esgPageDataImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BoxSectionContainer;
