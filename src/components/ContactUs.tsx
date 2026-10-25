"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Switch } from "@headlessui/react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { FaWhatsapp } from "react-icons/fa";
import { sendEmails } from "../email";

const address = "Gali No. 2, Fng Vihar 2, near Garhi, Chokhandi, Sector 121, Noida, Uttar Pradesh 201309";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=Gali+No.+2%2C+Fng+Vihar+2%2C+near+Garhi%2C+Chokhandi%2C+Sector+121%2C+Noida%2C+Uttar+Pradesh+201309";

export default function ContactUs() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!agreed || sending) return;
    setSending(true);
    setStatusMessage("Sending your message…");
    try {
      const result = await sendEmails(formData);
      if (result.success) setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setStatusMessage(result.message);
    } catch {
      setStatusMessage("Your message could not be sent. Please try again or contact us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-gutter pb-section" aria-labelledby="contact-title">
      <div className="page-shell overflow-hidden rounded-xl border border-line bg-surface shadow-card">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative isolate overflow-hidden bg-editorial-dark p-6 text-editorial-text sm:p-9 lg:p-12">
            <div className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full border border-editorial-muted/15" aria-hidden="true" />
            <div className="absolute -right-7 -top-7 -z-10 h-44 w-44 rounded-full border border-editorial-muted/15" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">The next step starts here</p>
            <h2 id="contact-title" className="mt-4 max-w-lg font-display text-heading-xl font-semibold">Let’s talk tables.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-editorial-muted">Tell us what you’re planning. We can talk products, table setup, installation, maintenance and care.</p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a href="tel:+919810508355" className="group rounded-lg border border-editorial-muted/20 bg-editorial-mid/40 p-4 transition-colors hover:bg-editorial-mid/70">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-editorial-muted">Call our team</span>
                <span className="mt-2 flex items-center justify-between text-base font-semibold">+91 9810508355 <ArrowUpRightIcon className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </a>
              <a href="mailto:askombilliard@gmail.com" className="group rounded-lg border border-editorial-muted/20 bg-editorial-mid/40 p-4 transition-colors hover:bg-editorial-mid/70">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-editorial-muted">Email</span>
                <span className="mt-2 flex items-center justify-between gap-2 break-all text-base font-semibold">askombilliard@gmail.com <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </a>
              <a href={`https://wa.me/918178455277?text=${encodeURIComponent("Hello, I would like to know more about your products and services")}`} target="_blank" rel="noreferrer" className="group rounded-lg border border-editorial-muted/20 bg-editorial-mid/40 p-4 transition-colors hover:bg-editorial-mid/70">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-editorial-muted">WhatsApp</span>
                <span className="mt-2 flex items-center justify-between text-base font-semibold"><span className="inline-flex items-center gap-2"><FaWhatsapp aria-hidden="true" /> +91 81784 55277</span><ArrowUpRightIcon className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </a>
            </div>

            <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-5 flex items-start justify-between gap-4 border-t border-editorial-muted/20 pt-5 text-sm leading-6 text-editorial-muted hover:text-editorial-text">
              <span><span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Visit us · Mon–Sat, 9AM–7PM</span>{address}</span>
              <ArrowUpRightIcon className="mt-1 h-4 w-4 shrink-0" />
            </a>
          </div>

          <div className="p-6 sm:p-9 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-dark">A good conversation starts with a note</p>
            <h3 className="mt-3 font-display text-heading-md font-semibold text-ink">What can we help you find?</h3>
            <p className="mt-2 text-sm leading-6 text-muted">Leave your details and a little about what you need. Our team will follow up.</p>
            <form onSubmit={handleSubmit} className="mt-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {[{ label: "First name", name: "firstName", type: "text", auto: "given-name" }, { label: "Last name", name: "lastName", type: "text", auto: "family-name" }, { label: "Email", name: "email", type: "email", auto: "email" }, { label: "Phone", name: "phone", type: "tel", auto: "tel" }].map((field) => (
                  <label key={field.name} className="grid gap-2 text-sm font-medium text-ink">{field.label}<input className="form-control" name={field.name} type={field.type} autoComplete={field.auto} value={formData[field.name as keyof typeof formData]} onChange={handleChange} required /></label>
                ))}
                <label className="grid gap-2 text-sm font-medium text-ink sm:col-span-2">Tell us what you have in mind<textarea className="form-control min-h-32 resize-y" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="A pool table for your home, a service question, or something else…" required /></label>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <Switch checked={agreed} onChange={setAgreed} aria-label="Agree to the terms and conditions" className={`${agreed ? "bg-sage-dark" : "bg-surface-2"} relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors`}><span className={`${agreed ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-surface shadow transition-transform`} /></Switch>
                <span className="text-sm text-muted">I agree to the terms and conditions.</span>
              </div>
              <button type="submit" disabled={!agreed || sending} className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-6 font-semibold text-surface transition-colors hover:bg-sage-dark disabled:cursor-not-allowed disabled:bg-surface-2 disabled:text-muted">{sending ? "Sending…" : "Send your enquiry"}</button>
              <p className="mt-4 min-h-6 text-sm text-muted" role="status" aria-live="polite">{statusMessage}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
