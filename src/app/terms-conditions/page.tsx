import React from 'react'
import TopBanner from '../components/Common/Banner/TopBanner'

const TermsConditions = () => {
    const BannerContainerData = {
      BannerHeading: "Terms & Conditions",
      BannerParagraph: "India's premier processed food manufacturers, offering manufacturing and packing services to well-known multinational corporations."
    }
    const bannerImage = 'https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg'
  return (
    <main className="flex min-h-screen flex-col items-cente">
        <TopBanner bannerImage={bannerImage} BannerContainerData={BannerContainerData} />
        <div className='w-full relative py-8 max-w-[1280px] mx-auto bg-white my-16 rounded-xl px-8'>
        <div className="py-20"><h1 className="block p text-5xl mb-5" id="terms-of-service">Terms of Service</h1>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               These Terms of Service govern your use of the websites, software
               and services offered through https://jstemplate.io (collectively,
               the "Service") by JS Template ("we" or
               "us"). By accessing or using the Service, you
               ("you" or "your") signify that you have read,
               understood, and agree to be bound by this Terms of Service
               Agreement ("Agreement") and any other applicable law,
               whether or not you are a registered user of our Service.
            </p>

            <h2 className="block p text-4xl mb-5" id="1.-use-of-the-service">1. Use of the Service</h2>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               Subject to the terms and conditions of this Agreement, you are
               hereby granted a non-exclusive, limited, non-transferable, freely
               revocable license to use the Service for your personal,
               noncommercial use only and as permitted by the features of the
               Service. JS Template reserves all rights not expressly granted
               herein in the Service and the JS Template Content (as defined
               below). JS Template may terminate this license at any time for
               any reason or no reason.
            </p>

            <h2 className="block p text-4xl mb-5" id="2.-user-content">2. User Content</h2>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               Some areas of the Service may allow users to post feedback,
               comments, questions, and other information ("User
               Content"). You are solely responsible for your User Content
               that you upload, publish, display, link to or otherwise make
               available (hereinafter, "post") on the Service, and you
               agree that we are only acting as a passive conduit for your
               online distribution and publication of your User Content.
            </p>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">You agree not to post User Content that:</p>
            <ul className="list-disc list-inside my-4">
               <li className="mb-2 last-of-type:mb-0">
                  may create a risk of harm, loss, physical or mental injury,
                  emotional distress, death, disability, disfigurement, or
                  physical or mental illness to you, to any other person, or to
                  any animal;
               </li>
               <li className="mb-2 last-of-type:mb-0">
                  may create a risk of any other loss or damage to any person or
                  property;
               </li>
               <li className="mb-2 last-of-type:mb-0">
                  seeks to harm or exploit children by exposing them to
                  inappropriate content, asking for personally identifiable
                  details or otherwise;
               </li>
               <li className="mb-2 last-of-type:mb-0">may constitute or contribute to a crime or tort;</li>
               <li className="mb-2 last-of-type:mb-0">
                  contains any information or content that we deem to be
                  unlawful, harmful, abusive, racially or ethnically offensive,
                  defamatory, infringing, invasive of personal privacy or
                  publicity rights, harassing, humiliating to other people
                  (publicly or otherwise), libelous, threatening, or otherwise
                  objectionable;
               </li>
               <li className="mb-2 last-of-type:mb-0">
                  contains any information or content that is illegal
                  (including, without limitation, the disclosure of insider
                  information under securities law or of another party"s
                  trade secrets);
               </li>
               <li className="mb-2 last-of-type:mb-0">
                  contains any information or content that you do not have a
                  right to make available under any law or under contractual or
                  fiduciary relationships; or
               </li>
               <li className="mb-2 last-of-type:mb-0">
                  contains any information or content that you know is not
                  correct and current.
               </li>
            </ul>

            <h2 className="block p text-4xl mb-5" id="3.-intellectual-property-rights">3. Intellectual Property Rights</h2>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               The design of the Service along with JS Template created text,
               scripts, graphics, interactive features and the like, and the
               trademarks, service marks and logos contained therein
               ("Marks"), are owned by or licensed to JS Template,
               subject to copyright.
            </p>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               JS Template Content is provided to you "as is",
               "as available" and "with all faults" for your
               information and personal, non-commercial use only and may not be
               downloaded, copied, reproduced, distributed, transmitted,
               broadcast, displayed, sold, licensed, or otherwise exploited for
               any purposes whatsoever without the express prior written consent
               of JS Template. No right or license under any copyright,
               trademark, patent, or other proprietary right or license is
               granted by this Agreement. JS Template reserves all rights not
               expressly granted in and to the JS Template Content, the Service
               and the JS Template Marks, and this Agreement do not transfer
               ownership of any of these rights.
            </p>

            <h2 className="block p text-4xl mb-5" id="4.-third-party-websites">4. Third Party Websites</h2>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               The Service may provide, or third parties may provide, links or
               other access to other sites and resources on the Internet. JS
               Template has no control over such sites and resources and JS
               Template is not responsible for and does not endorse such sites
               and resources. You further acknowledge and agree that JS Template
               will not be responsible or liable, directly or indirectly, for
               any damage or loss caused or alleged to be caused by or in
               connection with use of or reliance on any content, events, goods
               or services available on or through any such site or resource.
               Any dealings you have with third parties found while using the
               Service are between you and the third party, and you agree that
               JS Template is not liable for any loss or claim that you may have
               against any such third party.
            </p>

            <h2 className="block p text-4xl mb-5" id="5.-indemnity">5. Indemnity</h2>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               You agree to defend, indemnify and hold harmless JS Template and
               its subsidiaries, agents, licensors, managers, and other
               affiliated companies, and their employees, contractors, agents,
               officers and directors, from and against any and all claims,
               damages, obligations, losses, liabilities, costs or debt, and
               expenses (including but not limited to attorney"s fees)
               arising from: (i) your use of and access to the Service,
               including any data or content transmitted or received by you;
               (ii) your violation of any term of this Agreement, including
               without limitation your breach of any of the representations and
               warranties above; (iii) your violation of any third-party right,
               including without limitation any right of privacy or Intellectual
               Property Rights; (iv) your violation of any applicable law, rule
               or regulation; (v) any claim or damages that arise as a result of
               any of your User Content or any that is submitted via your
               account; or (vi) any other party"s access and use of the
               Service with your unique username, password or other appropriate
               security code.
            </p>

            <h2 className="block p text-4xl mb-5" id="6.-no-warranty">6. No Warranty</h2>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS
               AVAILABLE" BASIS. USE OF THE SERVICE IS AT YOUR OWN RISK. TO
               THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS
               PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
               IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
               MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
               NON-INFRINGEMENT. NO ADVICE OR INFORMATION, WHETHER ORAL OR
               WRITTEN, OBTAINED BY YOU FROM JS TEMPLATE OR THROUGH THE SERVICE
               WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN. WITHOUT
               LIMITING THE FOREGOING, JS TEMPLATE, ITS SUBSIDIARIES, ITS
               AFFILIATES, AND ITS LICENSORS DO NOT WARRANT THAT THE CONTENT IS
               ACCURATE, RELIABLE OR CORRECT; THAT THE SERVICE WILL MEET YOUR
               REQUIREMENTS; THAT THE SERVICE WILL BE AVAILABLE AT ANY
               PARTICULAR TIME OR LOCATION, UNINTERRUPTED OR SECURE; THAT ANY
               DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE SERVICE IS FREE
               OF VIRUSES OR OTHER HARMFUL COMPONENTS. ANY CONTENT DOWNLOADED OR
               OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS DOWNLOADED
               AT YOUR OWN RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY
               DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM
               SUCH DOWNLOAD OR YOUR USE OF THE SERVICE.
            </p>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               JS TEMPLATE DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
               RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED
               BY A THIRD PARTY THROUGH THE JS TEMPLATE SERVICE OR ANY
               HYPERLINKED WEBSITE OR SERVICE, AND JS TEMPLATE WILL NOT BE A
               PARTY TO OR IN ANY WAY MONITOR ANY TRANSACTION BETWEEN YOU AND
               THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
            </p>

            <h2 className="block p text-4xl mb-5" id="7.-limitation-of-liability">7. Limitation of Liability</h2>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
               SHALL JS TEMPLATE, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES,
               SUPPLIERS OR LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT,
               PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY
               DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF
               PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, THAT
               RESULT FROM THE USE OF, OR INABILITY TO USE, THIS SERVICE. UNDER
               NO CIRCUMSTANCES WILL JS TEMPLATE BE RESPONSIBLE FOR ANY DAMAGE,
               LOSS OR INJURY RESULTING FROM HACKING, TAMPERING OR OTHER
               UNAUTHORIZED ACCESS OR USE OF THE SERVICE OR YOUR ACCOUNT OR THE
               INFORMATION CONTAINED THEREIN.
            </p>

            <h2 className="block p text-4xl mb-5" id="8.-changes-to-the-service">8. Changes to the Service</h2>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               We reserve the right to withdraw or amend this Service, and any
               service or material we provide on the Service, in our sole
               discretion without notice. We will not be liable if for any
               reason all or any part of the Service is unavailable at any time
               or for any period. From time to time, we may restrict access to
               some parts of the Service, or the entire Service, to users,
               including registered users.
            </p>

            <h2 className="block p text-4xl mb-5" id="9.-changes-to-the-terms-of-service">9. Changes to the Terms of Service</h2>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               We may revise and update these Terms of Service from time to time
               in our sole discretion. All changes are effective immediately
               when we post them, and apply to all access to and use of the
               Service thereafter. Your continued use of the Service following
               the posting of revised Terms of Service means that you accept and
               agree to the changes. You are expected to check this page from
               time to time so you are aware of any changes, as they are binding
               on you.
            </p>

            <h2 className="block p text-4xl mb-5" id="10.-governing-law-and-jurisdiction">10. Governing Law and Jurisdiction</h2>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               All matters relating to the Service and these Terms of Service
               and any dispute or claim arising therefrom or related thereto (in
               each case, including non-contractual disputes or claims), shall
               be governed by and construed in accordance with the internal laws
               of the State of New York without giving effect to any choice or
               conflict of law provision or rule.
            </p>
            <p className="block p text-lg mb-4 text-base-content/80 leading-8">
               Any legal suit, action or proceeding arising out of, or related
               to, these Terms of Service or the Service shall be instituted
               exclusively in the federal courts of the United States or the
               courts of the State of New York in each case located in the City
               of New York and County of New York although we retain the right
               to bring any suit, action or proceeding against you for breach of
               these Terms of Service in your country of residence or any other
               relevant country. You waive any and all objections to the
               exercise of jurisdiction over you by such courts and to venue in
               such courts.
            </p></div>
        </div>
    </main>
  )
}

export default TermsConditions