import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of Service for the VARCAS Industries website, products, and services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      description="Please read these terms carefully before using the VARCAS website and services."
      notice="NONE OF OUR TERMS AND CONDITIONS AFFECT YOUR STATUTORY RIGHTS AS A CONSUMER."
      relatedHref="/privacy"
      relatedLabel="Privacy Policy →"
      sections={[
        {
          title: "In General",
          blocks: [
            {
              type: "paragraph",
              text: "Access to and use of this Website and the products and services available through this Website (collectively, the 'Services') are subject to the following terms, conditions, and notices (the 'Terms of Service'). By using the Services, you agree to all of the Terms of Service, as may be updated by us from time to time. You should check this page regularly to take notice of any changes we may have made to the Terms of Service.",
            },
            {
              type: "paragraph",
              text: "Access to this Website is permitted temporarily, and we reserve the right to withdraw or amend the Services without notice. We will not be liable if, for any reason, this Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts of this entire Website.",
            },
          ],
        },
        {
          title: "Prohibitions",
          blocks: [
            {
              type: "paragraph",
              text: "You must not misuse this Website. You will not:",
            },
            {
              type: "list",
              items: [
                "Commit or encourage a criminal offense.",
                "Transmit or distribute a virus, Trojan, worm, logic bomb, or any other material which is malicious, technologically harmful, in breach of confidence, or in any way offensive or obscene.",
                "Hack into any aspect of the Service.",
                "Corrupt data.",
                "Cause annoyance to other users.",
                "Infringe upon the rights of any other person's proprietary rights.",
                "Send unsolicited advertising or promotional material, commonly called 'spam.'",
                "Attempt to affect the performance or functionality of any computer facilities accessed through this Website.",
              ],
            },
            {
              type: "paragraph",
              text: "Breaching this provision would constitute a criminal offense under the Computer Misuse Act 1990. Varcas Industries Pvt. Ltd. will report any such breach to the relevant law enforcement authorities and disclose your identity to them.",
            },
            {
              type: "paragraph",
              text: "We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses, or other technologically harmful material that may infect your computer equipment, computer programs, data, or other proprietary material due to your use of this Website or to your downloading of any material posted on it, or on any website linked to it.",
            },
          ],
        },
        {
          title: "Intellectual Properties, Software, and Content",
          blocks: [
            {
              type: "paragraph",
              text: "The intellectual property rights in all software and content made available to you on or through this Website remains the property of Varcas Industries Pvt. Ltd. or its licensors and are protected by copyright laws and treaties worldwide.",
            },
            {
              type: "paragraph",
              text: "All such rights are reserved by Varcas Industries Pvt. Ltd. and its licensors. You may store, print, and display the content supplied solely for personal use. You are not permitted to publish, manipulate, distribute or otherwise reproduce, in any format, any of the content or copies of the content supplied to you or which appears on this Website, nor may you use any such content in connection with any business or commercial enterprise.",
            },
          ],
        },
        {
          title: "Linking to this Website",
          blocks: [
            {
              type: "paragraph",
              text: "You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it. Still, you must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part where none exists. You must not establish a link from any website that you do not own. This Website must not be framed on any other site, nor may you create a link to any part of this Website other than the home page. We reserve the right to withdraw linking permission without notice.",
            },
          ],
        },
        {
          title: "Variation",
          blocks: [
            {
              type: "paragraph",
              text: "Varcas Industries Pvt. Ltd. shall have the right in its absolute discretion at any time and without notice to amend, remove or vary the Services and any page of this Website.",
            },
          ],
        },
        {
          title: "Invalidities",
          blocks: [
            {
              type: "paragraph",
              text: "Suppose any part of the Terms of Service is unenforceable (including any provision in which we exclude our liability to you). In that case, the enforceability of any other part of the Terms of Service will not be affected by all other clauses remaining in full force and effect. So far as possible, where any clause/sub-clause or part of a clause/sub-clause can be severed to render the remaining part valid, the clause shall be interpreted accordingly. Alternatively, you agree that the clause shall be rectified and interpreted in a way that closely resembles the original meaning of the clause/sub-clause as permitted by law.",
            },
          ],
        },
        {
          title: "Complaints",
          blocks: [
            {
              type: "paragraph",
              text: "We operate a complaints handling procedure which we will use to try to resolve disputes when they arise, and please let us know if you have any complaints or comments.",
            },
          ],
        },
        {
          title: "Governing Law and Jurisdiction",
          blocks: [
            {
              type: "paragraph",
              text: "These terms and conditions are to be construed following the laws of India. If any dispute or claim is associated with these terms and conditions, that dispute or claim shall be subject to the exclusive jurisdiction of the Indian courts.",
            },
          ],
        },
      ]}
    />
  );
}
