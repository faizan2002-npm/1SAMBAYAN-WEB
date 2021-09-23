import React from 'react'
import { Container } from 'react-bootstrap'
import PublicLayout from './../../layouts/Public/PublicLayout';

const FAQ = () => {
    return (
        <PublicLayout>
           <Container className="my-5">
                <p><strong>Description of the personal information to be entered into the system</strong></p>
                <ul>
                    <li>The section titled “Information we collect” states that “[t]he personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.” We recommend deleting this since it may be deemed too general to be compliant with the DPA. Instead, please consider specifying the particular items of information to be collected.</li>
                    <li>In this regard, apart from the information collected through the “Contact Us” form, we have also included the items of personal information specified in the Membership Application Form downloadable from the website. Please confirm that the enumeration is accurate. Kindly also note that the list is subject to the addition of items that are collected by the 1SAMA AKO app, which we have not been able to enumerate since the app is currently unavailable on the Google Play Store and App store.</li>
                    <li>We have also deleted the section on Log Files and transferred the information enumerated therein to this section. While the previous section states that log files are not linked to any information that is personally identifiable, the information collected by log files (i.e., internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and the number of clicks) may be considered personal information when combined with other information that is collected by 1sambayan.</li>
                    <li>Finally, we have also renamed the section to “The information that we process” in order to cover all types of processing of personal data, and not just collection.</li>
                    <li>The purposes for which they are being or are to be processed, including processing for direct marketing, profiling, or historical, statistical, or scientific purpose</li>
                    <li>This item is already included in the Privacy Policy under the section titled “How we use your information”. We have renamed the same to “The purpose of our processing” for clarity. Further, as stated above, we have included references to the app. If the information collected by the app will be processed for other purposes, kindly specify such other purposes in the Privacy Policy. Finally, consistently with the categorization of the information in log files as personal information, we have transferred the purpose of using log files to this section.</li>
                    <li>On another point, none of the purposes indicated appear to require knowledge of the data subject’s skills/profession. Thus, please specify the purpose in the aforementioned section, if any. Otherwise, please consider removing the fields for skills and profession from the Membership Application Form.</li>
                </ul>
                <p><strong>Basis of processing, when processing is not based on the consent of the data subject</strong></p>
                <ul>
                    <li>As regards the section titled "Consent”, please note that implied, implicit or negative consent is not recognized under Philippine law. Further, while consent may be obtained through electronic means, the fact that the data subject must agree to a privacy policy or notice fails to meet the requirement of a meaningful consent. A “bundled” consent, for instance, will generally not suffice as the data subject is not empowered to make a true choice. Thus, we recommend deletion of the aforesaid section. Instead, 1sambayan may consider using a pop-up box asking for the user’s consent to processing of personal data, if necessary.</li>
                    <li>Nevertheless, please note that personal data that is not sensitive in nature may be processed without express consent of clients if the processing, including retention of personal data, is necessary and is related to the fulfillment of a contract with the data subject, or for purpose of legitimate interests of 1sambayan.</li>
                    <li>In this regard, although not expressly required under Section 16(b) above, kindly note that Section 6 of NPC Advisory No. 2021-01 states that the data subject should be notified of the “(b)asis of processing, when processing is not based on the consent of the data subject.” These may be any of the bases enumerated under Section 12 (for personal information) and Section 13 (for sensitive personal information). Based on the activities of 1sambayan, these may include consent under Sections 12(a) and 13(a), as well as to achieve the lawful and noncommercial objectives of 1sambayan under Section 13(d).</li>
                </ul>
                <p><strong>The scope and method of the personal data processing</strong></p>
                <ul>
                    <li>We have added a section on the scope and method of processing. Please specify the scope and method of the personal information processing, such as how personal information is stored, transmitted, and protected, if the personal information will be used as is or be subject to additional processing.</li>
                </ul>
                <p><strong>The recipients or classes of recipients to whom the personal data are or may be disclosed</strong></p>
                <ul>
                    <li>We have added a section on the recipients of personal data. Please indicate in the Privacy Policy who will be recipients of the personal data (i.e., who will have ability to access and process the same). Please also indicate if any personal information collected is either transferred, disclosed, or shared to third parties.</li>
                </ul>
                <p><strong>The methods utilized for automated access, if the same is allowed by the data subject, and the extent to which such access is authorized, including meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject</strong></p>
                <ul>
                    <li>We have added a section on automated access. Please confirm if there shall be automated access. If so, the methods for and extent of such access should be explained in the Privacy Policy. Otherwise, you may remove this section.</li>
                </ul>
                <p><strong>The identity and contact details of the personal information controller and its representative</strong></p>
                <ul>
                    <li>We have included the section entitled “Inquiry”, where you may indicate the name and contact details of the Data Protection Officer of 1sambayan.</li>
                </ul>
                <p><strong>The period for which the information will be stored or retained</strong></p>
                <ul>
                    <li>We have added a section on the retention period of personal information. Please indicate a specific retention period.</li>
                    <li>The existence of their rights, i.e., to access, correction, as well as the right to lodge a complaint before the National Privacy Commission (“NPC”)</li>
                    <li>We have added a section on the rights of data subjects under the DPA. <br />Please consider deleting the sections on the rights available under the California Consumer Privacy Act of 2018 (CCPA) and General Data Protection Regulation (GDPR). Based on our research, only California residents have rights under the California Consumer Privacy Act of 2018 (CCPA). Meanwhile, under Article 3 of the GDPR, the GDPR is generally only applicable in the European Union (“EU”). Outside the EU, it applies only to EU citizens and where EU law applies via public international law. Thus, the aforementioned sections may not be necessary, especially considering that the activities of 1sambayan are directed towards Filipino citizens.</li>
                </ul>
                <p><strong>Changes to the Privacy Policy</strong></p>
                <ul>
                    <li>We have included a part on the changes to the Privacy Policy as National Privacy Commission Advisory No. 2021-01, in the part on the Right to Object, specifies that the data subject shall be given notice in case there is a significant change or amendment involving the Privacy Policy.</li>
                </ul>
            </Container> 
        </PublicLayout>
    )
}

export default FAQ
