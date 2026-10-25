"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "../lib/navigation";
import { Button } from "../components/ui/Button";

const signUpSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  email: Yup.string().email("Enter a valid email address").required("Email is required"),
  password: Yup.string().min(6, "Use at least 6 characters").required("Password is required"),
});

export default function SignUp() {
  const [status, setStatus] = useState("");

  return (
    <section className="page-shell section-space">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-xl border border-line bg-surface shadow-soft md:grid-cols-[0.9fr_1.1fr]">
        <div className="editorial-panel flex flex-col justify-between p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-editorial-muted">OM Billiard</p>
          <div className="my-10">
            <p className="mb-4 text-sm font-medium text-gold">A note about accounts</p>
            <h1 className="font-display text-heading-lg font-semibold">A place for your next game.</h1>
            <p className="mt-4 max-w-sm text-sm leading-6 text-editorial-muted">Online account creation is not connected yet. Please contact our team for product questions.</p>
          </div>
          <a href="mailto:askombilliard@gmail.com" className="text-sm font-medium text-editorial-text underline decoration-editorial-warm underline-offset-4 hover:text-gold">Contact OM Billiard</a>
        </div>

        <div className="p-6 sm:p-10 lg:p-12">
          <h2 className="font-display text-heading-md font-semibold text-ink">Create an account</h2>
          <p className="mt-2 text-sm leading-6 text-muted">Account registration is not available yet.</p>
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={signUpSchema}
            onSubmit={async (_values, helpers) => {
              setStatus("Account creation is not connected. Your details have not been sent or saved.");
              helpers.setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="mt-7 space-y-5">
                <div>
                  <label htmlFor="signup-name" className="mb-1.5 block text-sm font-medium text-ink">Name</label>
                  <Field id="signup-name" name="username" type="text" autoComplete="name" className="form-control" placeholder="Your name" />
                  <ErrorMessage name="username" component="p" className="status-error mt-1.5 text-sm" />
                </div>
                <div>
                  <label htmlFor="signup-email" className="mb-1.5 block text-sm font-medium text-ink">Email</label>
                  <Field id="signup-email" name="email" type="email" autoComplete="email" className="form-control" placeholder="you@example.com" />
                  <ErrorMessage name="email" component="p" className="status-error mt-1.5 text-sm" />
                </div>
                <div>
                  <label htmlFor="signup-password" className="mb-1.5 block text-sm font-medium text-ink">Password</label>
                  <Field id="signup-password" name="password" type="password" autoComplete="new-password" className="form-control" placeholder="At least 6 characters" />
                  <ErrorMessage name="password" component="p" className="status-error mt-1.5 text-sm" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">Create account</Button>
                {status && <p role="status" aria-live="polite" className="status-neutral rounded-lg p-3 text-sm">{status}</p>}
              </Form>
            )}
          </Formik>
          <p className="mt-6 border-t border-line pt-5 text-sm text-muted">
            Already have an account? <Link to="/login" className="font-semibold text-gold-dark underline underline-offset-4">Sign in</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
