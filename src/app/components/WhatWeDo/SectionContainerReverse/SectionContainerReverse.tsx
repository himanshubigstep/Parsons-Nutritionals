import React from 'react';
import MarkdownIt from 'markdown-it'
import './SectionContainerReverse.css'

const md = new MarkdownIt();

const SectionContainerReverse = ({ contactSections }: { contactSections: any }) => {
  const esgPageDataContent = contactSections?.ProjectsBody[1]?.content
  const esgPageDataImage = contactSections?.ProjectsBody[1]?.media?.data?.attributes?.formats?.medium?.url

  return (
    <div className="w-full max-w-[1280px] mx-auto py-24">
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
          <div className="w-[95%] md:w-[45%] h-[520px] rounded-[3.75rem] z-10">
            <img
              className="w-full h-full object-cover rounded-[3.75rem] ml-0 md:ml-[10%] mt-0 md:mt-[-10%]"
              src={esgPageDataImage}
              alt=""
            />
          </div>
          <div className="w-[95%] md:w-[55%] h-full mt-8 md:mt-0 md:h-[520px] bg-white rounded-[3.75rem] py-8 px-8">
            <div className="w-full flex flex-col md:pl-[10%]">
                <h3 className="font-semibold text-2xl md:text-4xl mb-4">{esgPageDataContent?.title}</h3>
                <div className="font-medium uppercase text-xl mb-4">
                    <div
                      className="font-normal capitalize lg list-disc mt-2 marker-list"
                      dangerouslySetInnerHTML={{ __html: typeof esgPageDataContent?.content === 'string' ? md.render(esgPageDataContent.content) : '' }}
                    >
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SectionContainerReverse;
