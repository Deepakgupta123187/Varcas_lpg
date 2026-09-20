"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const EMAIL_ENDPOINT =
  "https://formsubmit.co/ajax/deepgupta881@gmail.com";

const emptyForm = {
  name: "",
  company: "",
  country: "",
  quantity: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const honeypot = new FormData(e.currentTarget).get("website");
    if (typeof honeypot === "string" && honeypot.trim()) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(EMAIL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          country: form.country,
          quantity: form.quantity,
          message: form.message,
          _subject: "VARCAS Quote Request",
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = (await response.json()) as {
        success?: string | boolean;
        message?: string;
      };

      if (!response.ok || data.success === "false" || data.success === false) {
        throw new Error(data.message || "Unable to send enquiry");
      }

      setStatus("sent");
      setForm(emptyForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-surface to-background px-5 py-16 md:px-10 md:py-20 lg:px-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <p className="text-base text-accent">Contact Us</p>
        <div className="mt-1 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-[26px] font-semibold text-white md:text-[30px]">
            Request a Quote
          </h2>
          <p className="max-w-md text-sm text-white lg:text-right lg:text-base">
            Tell us the model and quantity you need. We will send your enquiry
            to our team by email.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[465px_1fr] lg:gap-[45px]">
          <aside className="flex flex-col justify-center gap-8 rounded-[30px] bg-white/[0.02] p-8 md:p-10">
            <div>
              <p className="text-base text-accent">Manufactured & Marketed By</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                Varcas Industries Pvt. Ltd.
              </h3>
              <p className="mt-4 text-base text-white">
                Heavy Duty LPG Iron Press · Infra Heat Technology · Made in
                India
              </p>
            </div>
            <div className="h-px w-full bg-white/20" />
            <div className="space-y-6">
              <a
                href="tel:+919643221122"
                className="flex items-center gap-3 text-white transition hover:text-accent"
              >
                <span className="relative size-[30px] shrink-0 overflow-hidden">
                  <Image
                    src="/assets/icon-phone.svg"
                    alt=""
                    width={30}
                    height={30}
                    className="size-full object-contain"
                  />
                </span>
                +91 9643221122
              </a>
              <a
                href="mailto:exports@varcasindustries.com"
                className="flex items-center gap-3 text-white transition hover:text-accent"
              >
                <span className="relative size-[30px] shrink-0 overflow-hidden">
                  <Image
                    src="/assets/icon-email.svg"
                    alt=""
                    width={30}
                    height={30}
                    className="size-full object-contain"
                  />
                </span>
                exports@varcasindustries.com
              </a>
              <div className="flex items-center gap-3 text-white">
                <span className="relative size-[30px] shrink-0 overflow-hidden">
                  <Image
                    src="/assets/icon-location.svg"
                    alt=""
                    width={30}
                    height={30}
                    className="size-full object-contain"
                  />
                </span>
                India
              </div>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 rounded-[30px] bg-card p-6 md:p-10"
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            {[
              {
                key: "name" as const,
                label: "Name",
                placeholder: "Enter your name",
              },
              {
                key: "company" as const,
                label: "Company / Laundry Business",
                placeholder: "Enter your business name",
              },
              {
                key: "country" as const,
                label: "Country",
                placeholder: "Enter your country",
              },
              {
                key: "quantity" as const,
                label: "Required Quantity",
                placeholder: "e.g. 10 units",
              },
            ].map((field) => (
              <label key={field.key} className="flex flex-col gap-1.5">
                <span className="text-[13px] text-white">{field.label}</span>
                <input
                  required
                  name={field.key}
                  value={form[field.key]}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, [field.key]: e.target.value }))
                  }
                  placeholder={field.placeholder}
                  className="rounded-[15px] border-0 bg-white/10 px-4 py-3 text-base text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-accent"
                />
              </label>
            ))}

            <label className="flex flex-col gap-1.5">
              <span className="text-[13px] text-white">Message</span>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Tell us the model(s) you are interested in"
                rows={4}
                className="resize-none rounded-[15px] border-0 bg-white/10 px-4 py-3 text-base text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-accent"
              />
            </label>

            {status === "sent" && (
              <p className="text-sm text-emerald-400">
                Enquiry sent. Please also check deepgupta881@gmail.com for a
                one-time FormSubmit confirmation email if this is the first
                submission.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                {errorMessage || "Could not send the enquiry. Please try again."}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-11 w-fit items-center justify-center rounded-[15px] bg-accent px-5 text-[13px] font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
