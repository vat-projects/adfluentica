"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import Link from "next/link";
import Snipper from "@/icons/loading/Snipper";
import { excludedCountries } from "@/utils/countries";

function FormContacts() {
  const countryCode = useCountryCode();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const validationSchema = Yup.object({
    yourName: Yup.string().required("The field is required."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("The field is required."),
    phone: Yup.string().required("The field is required."),
    message: Yup.string().required("The field is required."),
    agreeToPolicy: Yup.boolean().oneOf(
      [true],
      "You must agree to the Privacy Policy."
    ),
  });

  const initialValues = {
    yourName: "",
    email: "",
    phone: "",
    message: "",
    agreeToPolicy: false,
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/emails/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
          setIsSuccess(true);
          setIsFormVisible(false);
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form">
      {isFormVisible ? (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, status, errors, touched }) => (
            <div className="wrapper">
              <Form className="form">
                <div
                  className={`row ${
                    touched.yourName && errors.yourName ? "invalid" : ""
                  }`}
                >
                  <span className="label">Your Name</span>
                  <Field name="yourName">
                    {({ field }) => <input {...field} type="text" />}
                  </Field>
                </div>

                <div
                  className={`row _phone ${
                    touched.phone && errors.phone ? "invalid" : ""
                  }`}
                >
                  <span className="label">Your Phone</span>
                  <Field name="phone">
                    {({ field }) => (
                      <PhoneInput
                        country={countryCode}
                        excludeCountries={excludedCountries}
                        value={field.value}
                        onChange={(value) =>
                          field.onChange({ target: { name: "phone", value } })
                        }
                      />
                    )}
                  </Field>
                </div>

                <div
                  className={`row ${
                    touched.email && errors.email ? "invalid" : ""
                  }`}
                >
                  <span className="label">Your Email</span>
                  <Field name="email">
                    {({ field }) => <input {...field} type="email" />}
                  </Field>
                </div>

                <div className="row">
                  <span className="label">Your Message</span>
                  <Field name="message">
                    {({ field }) => <input {...field} />}
                  </Field>
                </div>

                <div
                  className={`row _policy ${
                    touched.agreeToPolicy && errors.agreeToPolicy
                      ? "invalid"
                      : ""
                  }`}
                >
                  <Field name="agreeToPolicy">
                    {({ field }) => (
                      <label
                        className={`checkbox-label ${
                          field.value ? "_active" : ""
                        }`}
                      >
                        <input {...field} type="checkbox" />
                        <span>
                          I accept the{" "}
                          <Link href="/terms-of-service">Terms of Service</Link>{" "}
                          and understand that my data will be securely stored in
                          accordance with the policy.
                        </span>
                      </label>
                    )}
                  </Field>
                  {/* {touched.agreeToPolicy && errors.agreeToPolicy && (
                    <div className="error-message">{errors.agreeToPolicy}</div>
                  )} */}
                </div>

                {Object.keys(errors).length > 0 && (
                  <span className="general-error">
                    Please correct the errors above.
                  </span>
                )}

                <button
                  type="submit"
                  className="button"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                {isSubmitting && (
                  <div className="loading-icon">
                    <Snipper />
                  </div>
                )}
              </Form>
              {status && status.success && (
                <div className="success-message">
                  <span>Thank you for your request!</span>
                  We will review it and contact you shortly.
                  <button
                    className="button"
                    onClick={() => window.location.reload()}
                  >
                    Return
                  </button>
                </div>
              )}
            </div>
          )}
        </Formik>
      ) : (
        <div className="success-message">
          <div className="success-message__wrapper">
            <span>Thank you for your request!</span>
            We will review it and contact you shortly.
            <button className="button" onClick={() => window.location.reload()}>
              Return
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormContacts;
