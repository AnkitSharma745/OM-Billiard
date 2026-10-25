"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "../lib/navigation";
import { Button } from "../components/ui/Button";

const loginSchema = Yup.object({
  email: Yup.string().email("Enter a valid email address").required("Email is required"),
  password: Yup.string().min(6, "Use at least 6 characters").required("Password is required"),
});

export default function Login() {
  const [status, setStatus] = useState("");

  return (
    <section className="page-shell section-space">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-xl border border-line bg-surface shadow-soft md:grid-cols-[0.9fr_1.1fr]">
        <div className="editorial-panel flex flex-col justify-between p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-editorial-muted">OM Billiard</p>
          <div className="my-10">
            <p className="mb-4 text-sm font-medium text-gold">Your account</p>
            <h1 className="font-display text-heading-lg font-semibold">Welcome back.</h1>
            <p className="mt-4 max-w-sm text-sm leading-6 text-editorial-muted">Sign-in services are not connected yet. You can still reach our team directly for help with a product or inquiry.</p>
          </div>
          <a href="mailto:askombilliard@gmail.com" className="text-sm font-medium text-editorial-text underline decoration-editorial-warm underline-offset-4 hover:text-gold">Contact OM Billiard</a>
        </div>

        <div className="p-6 sm:p-10 lg:p-12">
          <h2 className="font-display text-heading-md font-semibold text-ink">Sign in</h2>
          <p className="mt-2 text-sm leading-6 text-muted">Enter your details to continue.</p>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={async (_values, helpers) => {
              setStatus("Sign-in is not connected yet. Your details have not been sent or saved.");
              helpers.setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="mt-7 space-y-5">
                <div>
                  <label htmlFor="login-email" className="mb-1.5 block text-sm font-medium text-ink">Email</label>
                  <Field id="login-email" name="email" type="email" autoComplete="email" className="form-control" placeholder="you@example.com" />
                  <ErrorMessage name="email" component="p" className="status-error mt-1.5 text-sm" />
                </div>
                <div>
                  <label htmlFor="login-password" className="mb-1.5 block text-sm font-medium text-ink">Password</label>
                  <Field id="login-password" name="password" type="password" autoComplete="current-password" className="form-control" placeholder="Enter your password" />
                  <ErrorMessage name="password" component="p" className="status-error mt-1.5 text-sm" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">Sign in</Button>
                {status && <p role="status" aria-live="polite" className="status-neutral rounded-lg p-3 text-sm">{status}</p>}
              </Form>
            )}
          </Formik>
          <p className="mt-6 border-t border-line pt-5 text-sm text-muted">
            New to OM Billiard? <Link to="/signup" className="font-semibold text-gold-dark underline underline-offset-4">Create an account</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
