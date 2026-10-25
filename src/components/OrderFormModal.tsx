"use client";

import { useId, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Switch } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { sendEmails } from "../email";
import { Button } from "./ui/Button";

type InquiryForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
};

const emptyForm: InquiryForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
};

const fields = [
  { name: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "address", label: "City or delivery address", type: "text", autoComplete: "street-address" },
] as const;

export default function OrderNowModal({ triggerLabel = "Request product details", productName }: { triggerLabel?: string; productName?: string }) {
  const id = useId();
  const [formData, setFormData] = useState<InquiryForm>(emptyForm);
  const [agreed, setAgreed] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("Sending your inquiry…");
    const inquiryContext = [productName && `Product: ${productName}`, formData.address && `Location: ${formData.address}`].filter(Boolean).join("\n");
    const result = await sendEmails({ ...formData, message: inquiryContext || undefined });

    if (result.success) {
      setFormData(emptyForm);
      setStatusMessage("");
      setIsOpen(false);
      setIsThankYouModalOpen(true);
      return;
    }

    setStatusMessage(result.message);
  };

  return (
    <>
      <Button variant="secondary" size="sm" onClick={() => setIsOpen(true)}>{triggerLabel}</Button>

      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-overlay">
        <DialogBackdrop transition className="fixed inset-0 bg-overlay backdrop-blur-sm duration-normal data-[closed]:opacity-0" />
        <div className="fixed inset-0 z-overlay w-screen overflow-y-auto p-3 sm:p-6">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel transition className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-xl overflow-y-auto rounded-xl border border-line bg-surface p-5 shadow-overlay duration-normal data-[closed]:translate-y-3 data-[closed]:opacity-0 sm:max-h-[calc(100dvh-3rem)] sm:p-8">
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close inquiry form" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink">
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <DialogTitle className="pr-12 font-display text-heading-md font-semibold text-ink">{productName ? `Ask us about ${productName}` : "Ask us about this product"}</DialogTitle>
              <p className="mt-2 max-w-lg text-sm leading-6 text-muted">Share your contact details and our team can follow up with product information.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {fields.map((field) => {
                    const fieldId = `${id}-${field.name}`;
                    return (
                      <div key={field.name} className={field.name === "address" ? "sm:col-span-2" : ""}>
                        <label htmlFor={fieldId} className="mb-1.5 block text-sm font-medium text-ink">{field.label}</label>
                        <input
                          id={fieldId}
                          name={field.name}
                          type={field.type}
                          autoComplete={field.autoComplete}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-bg p-4">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    aria-label="I agree to be contacted about this inquiry"
                    className={`relative mt-0.5 inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-fast ${agreed ? "bg-sage-dark" : "bg-sand"}`}
                  >
                    <span className={`inline-block h-4 w-4 rounded-full bg-surface transition-transform duration-fast ${agreed ? "translate-x-6" : "translate-x-1"}`} />
                  </Switch>
                  <p className="text-sm leading-5 text-muted">I agree to be contacted about this inquiry.</p>
                </div>

                <Button type="submit" disabled={!agreed} className="w-full">Send inquiry</Button>
                {statusMessage && <p role="status" aria-live="polite" className="status-error text-sm">{statusMessage}</p>}
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog open={isThankYouModalOpen} onClose={setIsThankYouModalOpen} className="relative z-toast">
        <DialogBackdrop className="fixed inset-0 bg-overlay backdrop-blur-sm" />
        <div className="fixed inset-0 z-toast w-screen overflow-y-auto p-4">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel className="w-full max-w-md rounded-xl border border-line bg-surface p-7 text-center shadow-overlay sm:p-9">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-sage/40 text-sage-dark" aria-hidden="true">✓</span>
              <DialogTitle className="mt-4 font-display text-heading-md font-semibold text-ink">Inquiry sent</DialogTitle>
              <p className="mt-2 text-sm leading-6 text-muted">Thanks for getting in touch. Your message has been sent to the OM Billiard team.</p>
              <Button className="mt-6 w-full" onClick={() => setIsThankYouModalOpen(false)}>Close</Button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
