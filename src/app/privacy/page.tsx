import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Varcas Industries Pvt. Ltd. collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="Your information stays confidential. We only use it to support your enquiry and relevant updates."
      relatedHref="/terms"
      relatedLabel="Terms & Conditions →"
      items={[
        "The data provided by you will remain confidential with us.",
        "We will only access your data to deliver promotional events and updates.",
        "We will not make unnecessary phone calls on your phone number.",
        "You can unsubscribe from our promotional emails anytime.",
        "Our concerned person will contact you to solve the query, and you won't be restricted from sharing any personal information you don't wish to disclose.",
      ]}
    />
  );
}
