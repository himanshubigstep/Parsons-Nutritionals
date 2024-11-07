import React from 'react';
import MarkdownIt from 'markdown-it'
import './SectionContainer.css'

const md = new MarkdownIt();

const SectionContainer = ({ contactSections }: { contactSections: any }) => {
  const esgPageDataContent = contactSections?.ProjectsBody[0]?.content
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL

  const esgPageDataImage = imageBaseUrl + contactSections?.ProjectsBody[0]?.media?.data?.attributes?.formats?.medium?.url

  return (
    <div className="w-full max-w-[1280px] mx-auto py-24">
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-[95%] md:w-[55%] mx-auto h-full md:h-[520px] bg-white rounded-[3.75rem] py-8 px-8">
          <div className="w-full">
            <h3 className="font-semibold text-2xl md:text-4xl mb-4">{esgPageDataContent?.title}</h3>
            <div className="font-medium   text-xl mb-4 w-[95%] md:w-[85%]">
              <div
                className="font-normal   lg list-disc mt-2 marker-list"
                dangerouslySetInnerHTML={{ __html: typeof esgPageDataContent?.content === 'string' ? md.render(esgPageDataContent.content) : '' }}
              >
              </div>
            </div>
          </div>
        </div>
        <div className="w-[95%] md:w-[45%] mx-auto h-[520px] rounded-[3.75rem]">
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

export default SectionContainer;
