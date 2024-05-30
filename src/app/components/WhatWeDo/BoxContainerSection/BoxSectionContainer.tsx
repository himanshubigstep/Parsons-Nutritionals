import React from 'react';

const BoxSectionContainer = ({ sections }: { sections: any }) => {

  return (
    <div className="w-full max-w-[1280px] mx-auto py-24">
      {sections.map((section: { title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; info: any[]; imageSrc: string | undefined; }, index: React.Key | null | undefined) => (
        <div key={index} className="w-full flex flex-col md:flex-row justify-center items-center">
          <div className="w-[95%] md:w-[55%] mx-auto h-full md:h-[520px] bg-white rounded-[3.75rem] flex flex-col py-8 px-8">
            <div className="w-[95%] md:w-[80%] flex flex-col">
              <h3 className="font-semibold text-2xl md:text-4xl mb-4">{section.title}</h3>
              {section.info.map((infoItem: { label: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; content: string | number | bigint | boolean | any[] | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined; }, infoIndex: React.Key | null | undefined) => (
                <div key={infoIndex} className="font-medium uppercase text-xl mb-4">
                  {infoItem.label}
                  {Array.isArray(infoItem.content) ? (
                    <ul className="font-normal capitalize lg list-disc mt-2 pl-12">
                      {infoItem.content.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, listItemIndex: React.Key | null | undefined) => (
                        <li key={listItemIndex} className="mb-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-normal capitalize lg mt-2">{infoItem.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-[95%] md:w-[45%] mx-auto h-[520px] rounded-[3.75rem]">
            <img
              className="w-full h-full object-cover rounded-[3.75rem] ml-0 md:ml-[-15%] mt-8 md:mt-[10%]"
              src={section.imageSrc}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxSectionContainer;
